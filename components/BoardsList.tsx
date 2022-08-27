import Link from "next/link";
import { FormattedBoard } from "../types";

type BoardsListProps = {
  boards: FormattedBoard[];
};

const BoardsList: React.FC<BoardsListProps> = ({ boards }) => {
  return (
    <div>
      <h2>Boards</h2>
      <ul>
        {boards.map((board) => {
          return (
            <li key={board.id}>
              <Link href={`/boards/${board.id}`}>
                <a>{board.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoardsList;

import Link from "next/link";
import styled from "styled-components";
import { IBoard } from "../../types";

const StyledBoardsList = styled.div`
  list-style: none;
`;

const BoardListItem = styled.li`
  display: block;
  margin: 1rem 0;
`;

type BoardsListProps = {
  boards: IBoard[];
};

const BoardsList: React.FC<BoardsListProps> = ({ boards }) => {
  return (
    <div>
      <h2>Boards</h2>
      <StyledBoardsList>
        {boards.map((board) => {
          return (
            <BoardListItem key={board.id}>
              <Link href={`/boards/${board.id}`}>
                <a>{board.name}</a>
              </Link>
            </BoardListItem>
          );
        })}
      </StyledBoardsList>
    </div>
  );
};

export default BoardsList;

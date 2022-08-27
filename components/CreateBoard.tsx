import { ChangeEvent, FormEvent, useState } from "react";

import styles from "../styles/Home.module.css";

type CreateBoardProps = {
  onSubmit: (name: string) => void;
};

const CreateBoard: React.FC<CreateBoardProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(name || "");
    setName("");
  };

  return (
    <div>
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Board Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="November 2022 Jobs"
          onChange={handleNameChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default CreateBoard;

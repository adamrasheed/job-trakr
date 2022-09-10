import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-gap: 1rem;
  max-width: 32rem;
`;

type CreateBoardProps = {
  onSubmit: (name: string) => void;
  isLoading?: boolean;
};

const CreateBoard: React.FC<CreateBoardProps> = ({ onSubmit, isLoading }) => {
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
    <Form action="" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Board Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="November 2022 Jobs"
          onChange={handleNameChange}
        />
      </fieldset>
      <button disabled={isLoading} type="submit">
        Submit
      </button>
    </Form>
  );
};
export default CreateBoard;

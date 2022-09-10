import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/StyledGenerics";

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
        <label htmlFor="boardName">Board Name</label>
        <input
          type="text"
          name="boardName"
          id="boardNAme"
          placeholder="November 2022 Jobs"
          value={name}
          onChange={handleNameChange}
        />
      </fieldset>
      <Button disabled={isLoading} type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default CreateBoard;

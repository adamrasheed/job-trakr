import { useFormik } from "formik";
import styled from "styled-components";

const initialValues = {
  name: "",
  url: "",
};

const StyleForm = styled.form`
  margin: 2rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;

  button[type="submit"] {
    grid-column: 1 / 3;
  }
`;

type JobFormProps = {
  onSubmit: (values: { name: string; url: string }) => void;
};

const JobForm: React.FC<JobFormProps> = ({ onSubmit }) => {
  const handleSubmit = (values: { name: string; url: string }) => {
    onSubmit(values);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <h3>Track a new job!</h3>
      <StyleForm action="" onSubmit={formik.handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values["name"]}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="url">URL</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={formik.handleChange}
            value={formik.values["url"]}
            required
          />
        </fieldset>
        <button type="submit">Submit</button>
      </StyleForm>
    </div>
  );
};

export default JobForm;

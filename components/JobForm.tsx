import { useFormik } from "formik";
import styled from "styled-components";

const initialValues = {
  name: "",
  url: "",
};

const StyledJobForm = styled.div`
  max-width: 40rem;
`;

const StyledForm = styled.form`
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
    <StyledJobForm>
      <h4>Track a new job!</h4>
      <StyledForm action="" onSubmit={formik.handleSubmit}>
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
      </StyledForm>
    </StyledJobForm>
  );
};

export default JobForm;

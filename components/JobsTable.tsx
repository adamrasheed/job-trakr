import { FormattedJob } from "../types";

const JobsTable: React.FC<{ jobs: FormattedJob[] }> = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>
          <div>Name: {job.name}</div>
          <div>status: {job.status}</div>
        </div>
      ))}
    </div>
  );
};

export default JobsTable;

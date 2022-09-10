import { IJob } from "../../types";

import { Cell, HeaderCell, Row } from "../styles/StyledJobs";

const JobsList: React.FC<{ jobs: IJob[] }> = ({ jobs }) => {
  return (
    <div>
      <Row isHeader>
        <HeaderCell>Name</HeaderCell>
        <HeaderCell>Status</HeaderCell>
        <HeaderCell>Last Updates</HeaderCell>
      </Row>

      {jobs.map((job) => (
        <Row key={job.id}>
          <Cell>
            {job.url ? (
              <a target="_blank" href={job.url} rel="noreferrer">
                {job.name}
              </a>
            ) : (
              job.name
            )}
          </Cell>
          <Cell>{job.status}</Cell>
          <Cell>{new Date(job.dateModified).toDateString()}</Cell>
        </Row>
      ))}
    </div>
  );
};

export default JobsList;

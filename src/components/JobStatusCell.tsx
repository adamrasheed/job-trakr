import { JobStatus } from "@prisma/client";
import * as Popover from "@radix-ui/react-popover";
import { Pencil2Icon as Icon } from "@radix-ui/react-icons";

import { Cell, StyledJobStatus } from "../styles/StyledJobs";
import { getJobStatusString } from "../utils/util";
import EditJobStatusPopOver from "./EditJobStatusPopOver";

type props = {
  status: JobStatus;
  onUpdateStatus: (status: JobStatus) => void;
};

const JobStatusCell: React.FC<props> = ({ status, onUpdateStatus }) => {
  return (
    <Cell isFlex>
      <StyledJobStatus status={status}>
        {getJobStatusString(status)}
      </StyledJobStatus>
      <Popover.Root>
        <Popover.Trigger title="Edit">
          <Icon />
        </Popover.Trigger>
        <EditJobStatusPopOver onUpdateStatus={onUpdateStatus} />
      </Popover.Root>
    </Cell>
  );
};

export default JobStatusCell;

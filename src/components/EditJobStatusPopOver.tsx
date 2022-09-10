import { JobStatus } from "@prisma/client";
import React from "react";
import { Button } from "../styles/StyledGenerics";
import { StyledEditContent } from "../styles/StyledJobs";
import { getJobStatusString } from "../utils/util";

type props = {
  onUpdateStatus: (status: JobStatus) => void;
};

const EditJobStatusPopOver: React.FC<props> = ({ onUpdateStatus }) => {
  const handleUpdate = (status: JobStatus) => {
    onUpdateStatus(status);
  };

  return (
    <StyledEditContent>
      <h3>Edit Status</h3>
      <Button isSmall onClick={() => handleUpdate(JobStatus.VIEWED)}>
        {getJobStatusString(JobStatus.VIEWED)}
      </Button>
      <Button
        isSmall
        onClick={() =>
          handleUpdate(JobStatus.INTERVIEW_RECRUITER_SCREEN_SCHEDULED)
        }
      >
        {getJobStatusString(JobStatus.INTERVIEW_RECRUITER_SCREEN_SCHEDULED)}
      </Button>
      <Button
        isSmall
        onClick={() =>
          handleUpdate(JobStatus.INTERVIEW_TECHNICAL_ROUND_SCHEDULED)
        }
      >
        {getJobStatusString(JobStatus.INTERVIEW_TECHNICAL_ROUND_SCHEDULED)}
      </Button>
      <Button
        isSmall
        onClick={() => handleUpdate(JobStatus.INTERVIEW_ONSITE_SCHEDULED)}
      >
        {getJobStatusString(JobStatus.INTERVIEW_ONSITE_SCHEDULED)}
      </Button>
      <Button isSmall onClick={() => handleUpdate(JobStatus.OFFER_PROVIDED)}>
        {getJobStatusString(JobStatus.OFFER_PROVIDED)}
      </Button>
      <Button isSmall onClick={() => handleUpdate(JobStatus.DECLINED)}>
        {getJobStatusString(JobStatus.DECLINED)}
      </Button>
    </StyledEditContent>
  );
};

export default EditJobStatusPopOver;

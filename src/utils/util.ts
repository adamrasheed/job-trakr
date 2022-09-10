import { JobStatus } from "@prisma/client";

const jobStatusStringMap: Record<JobStatus, string> = {
  [JobStatus.VIEWED]: "Viewed",
  [JobStatus.APPLIED]: "Applied",
  [JobStatus.INTERVIEW_RECRUITER_SCREEN_SCHEDULED]: "Recruiter Screen",
  [JobStatus.INTERVIEW_RECRUITER_SCREEN]: "Recruiter Screen",
  [JobStatus.INTERVIEW_TECHNICAL_ROUND_SCHEDULED]: "Technical Round",
  [JobStatus.INTERVIEW_TECHNICAL_ROUND]: "Technical Round",
  [JobStatus.INTERVIEW_ONSITE_SCHEDULED]: "Onsite",
  [JobStatus.INTERVIEW_ONSITE]: "Onsite",
  [JobStatus.DECLINED]: "Declined",
  [JobStatus.OFFER_PROVIDED]: "Offer Provided",
};

export const getJobStatusString = (status: JobStatus) => {
  return jobStatusStringMap[status];
};

export const colorMap: Record<JobStatus, { bg: string; color: string }> = {
  [JobStatus.VIEWED]: { bg: "#D1D5DB", color: "#374151" },
  [JobStatus.APPLIED]: { bg: "#D1D5DB", color: "#374151" },
  [JobStatus.INTERVIEW_RECRUITER_SCREEN_SCHEDULED]: {
    bg: "#FACA15",
    color: "#9F580A",
  },
  [JobStatus.INTERVIEW_RECRUITER_SCREEN]: { bg: "#FACA15", color: "#9F580A" },
  [JobStatus.INTERVIEW_TECHNICAL_ROUND_SCHEDULED]: {
    bg: "#FACA15",
    color: "#9F580A",
  },
  [JobStatus.INTERVIEW_TECHNICAL_ROUND]: { bg: "#FACA15", color: "#9F580A" },
  [JobStatus.INTERVIEW_ONSITE_SCHEDULED]: { bg: "#FACA15", color: "#9F580A" },
  [JobStatus.INTERVIEW_ONSITE]: { bg: "#FACA15", color: "#9F580A" },
  [JobStatus.DECLINED]: { bg: "#FACA15", color: "#9F580A" },
  [JobStatus.OFFER_PROVIDED]: { bg: "#84E1BC", color: "#057A55" },
};

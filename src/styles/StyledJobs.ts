import { JobStatus } from "@prisma/client";
import { Content } from "@radix-ui/react-popover";
import styled, { css } from "styled-components";
import { colorMap } from "../utils/util";

type RowProps = {
  columns?: number;
  isHeader?: boolean;
};

export const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns ? `repeat(${props.columns}, 1fr)` : `repeat(3, 1fr)`};
  padding: 0.5rem 0;
  box-shadow: ${(props) =>
    props.isHeader ? `0 1px 0 0 currentColor` : `none`};
`;

export const Cell = styled.div<{ isFlex?: boolean }>`
  padding: 0;
  margin: 0;
  justify-self: stretch;
  align-self: center;
  text-transform: capitalize;
  ${(props) =>
    props.isFlex
      ? `display: flex; justify-content: flex-start; align-items: center; gap: 1rem;`
      : `display: block;`}
`;

export const HeaderCell = styled(Cell)`
  font-variant-caps: all-small-caps;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0.6;
`;

export const StyledJobStatus = styled.div<{ status: JobStatus }>`
  background: ${(props) => colorMap[props.status].bg};
  color: ${(props) => colorMap[props.status].color};
  text-transform: capitalize;
  border-radius: 0.25rem;
  width: fit-content;
  padding: 0.325rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.025em;
`;

export const StyledEditContent = styled(Content)`
  padding: 0.5rem;
  background: lightgray;
  display: grid;
  grid-gap: 1rem;
  margin-top: 1rem;
`;

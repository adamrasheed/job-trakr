import styled from "styled-components";

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

export const Cell = styled.p`
  padding: 0;
  margin: 0;
  justify-self: stretch;
  align-self: center;
`;

export const HeaderCell = styled(Cell)`
  font-variant-caps: all-small-caps;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0.6;
`;

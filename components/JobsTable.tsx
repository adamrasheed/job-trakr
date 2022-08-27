import {
  Column,
  Table,
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  RowData,
  createColumnHelper,
} from "@tanstack/react-table";

import { FormattedJob } from "../types";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}

const JobsTable: React.FC<{ jobs: FormattedJob[] }> = ({ jobs }) => {
  const columnHelper = createColumnHelper<FormattedJob>();
  const table = useReactTable({ data: jobs });
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

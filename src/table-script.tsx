import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";
import sourceData from "./source-data.json";
import type { SourceDataType, TableDataType } from "./types";

/**
 * Example of how a tableData object should be structured.
 *
 * Each `row` object has the following properties:
 * @prop {string} person - The full name of the employee.
 * @prop {number} past12Months - The value for the past 12 months.
 * @prop {number} y2d - The year-to-date value.
 * @prop {number} may - The value for May.
 * @prop {number} june - The value for June.
 * @prop {number} july - The value for July.
 * @prop {number} netEarningsPrevMonth - The net earnings for the previous month.
 * @prop {number} utilizationRateOverall - The net earnings for the previous month.
 * @prop {number} totalCostPerCustomer - The net earnings for the previous month.
 * 
 * 
 */

const tableData: TableDataType[] = (
  sourceData as unknown as SourceDataType[]
).map((dataRow, index) => {
  const person = `${dataRow?.employees?.firstname} - ...`; // extract the utilization rate like this
  const utilizationRate = `${dataRow?.employees?.workforceUtilisation?.utilisationRateOverall}`;
  const totalCostPerCustomer = `${dataRow?.employees?.workforceUtilisation?.totalCostPerCustomer}`;

  const row: TableDataType = {
    person: `${person}`,
    past12Months: `past12Months ${index} placeholder`,
    y2d: `y2d ${index} placeholder`,
    may: `may ${index} placeholder`,
    june: `june ${index} placeholder`,
    july: `july ${index} placeholder`,
    netEarningsPrevMonth: `netEarningsPrevMonth ${index} placeholder`,
    utilizationRateOverall: `utilizationRateOverall ${utilizationRate}`,
    totalCostPerCustomer: `totalCostPerCustomer ${totalCostPerCustomer}`
  };

  return row;
});

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<TableDataType>[]>(
    () => [
      {
        accessorKey: "person",
        header: "Person",
      },
      {
        accessorKey: "past12Months",
        header: "Past 12 Months",
      },
      {
        accessorKey: "y2d",
        header: "Y2D",
      },
      {
        accessorKey: "may",
        header: "May",
      },
      {
        accessorKey: "june",
        header: "June",
      },
      {
        accessorKey: "july",
        header: "July",
      },
      {
        accessorKey: "netEarningsPrevMonth",
        header: "Net Earnings Prev Month",
      },
      {
        accessorKey: "utilizationRateOverall",
        header: "utilizationRateOverall",
      },
      {
        accessorKey: "totalCostPerCustomer",
        header: "totalCostPerCustomer",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: tableData,
  });

  return <MaterialReactTable table={table} />;
};

export default Example;

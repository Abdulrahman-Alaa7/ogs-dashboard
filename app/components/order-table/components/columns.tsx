"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Order } from "../data/orderSchema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import Act from "./act";
import { statuses } from "../data/orders";
import { Badge } from "../../../../components/ui/badge";
import { format } from "timeago.js";

const sumPrice = (order: any[]) => {
  let TotalPrice = 0;
  for (let i = 0; i < order.length; i++) {
    TotalPrice += order[i].price * order[i].quantity;
  }
  return TotalPrice;
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px] line-clamp-1">{row.getValue("id")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity & Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <Badge variant="default"> {row.original.order?.length}</Badge>
          <span className="max-w-[500px] truncate font-medium line-clamp-2">
            {row.getValue("fullName")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "Total Price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Price" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            EGP {sumPrice(row.original.order)}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <Badge
          className={`flex w-fit py-[4px]  items-center gap-2  ${
            row.getValue("status") == "pending" &&
            "bg-yellow-500 hover:bg-yellow-600"
          } ${
            row.getValue("status") == "in progress" &&
            "bg-blue-500 hover:bg-blue-600"
          } ${
            row.getValue("status") == "done" &&
            "bg-green-500 hover:bg-green-600"
          } ${
            row.getValue("status") == "canceled" &&
            "bg-red-500 hover:bg-red-600"
          }`}
        >
          {status.icon && <status.icon className="h-5 w-5 " />}
          <span>{status.label}</span>
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created at" />
    ),
    cell: ({ row }) => (
      <div className="w-[90px]">{format(Date.now() - 11 * 1000 * 60 * 60)}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "view",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="View" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Act id={row.getValue("id")} />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

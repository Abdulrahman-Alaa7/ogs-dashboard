"use client";
import { useState } from "react";
import { Row } from "@tanstack/react-table";
import { Button } from "../../../../components/ui/button";

import { orderShema } from "../data/orderSchema";
import { Trash2 } from "lucide-react";
import { AlertModal } from "../../alert-modal";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const order = orderShema.parse(row.original);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onConfirm = async () => {};
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <Button
        variant="ghost"
        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        onClick={() => setOpen(true)}
      >
        <Trash2 color="red" size={20} />
      </Button>
    </>
  );
}

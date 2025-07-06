import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import CreateTransaction from "./CreateTransaction";

export default function AddTransactionModal({ open, onOpenChange, onSave, transaction }) {
  function handleSubmit(data) {
    onSave(data);  // send data to parent
    onOpenChange(false);     // close modal
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a New Transaction</DialogTitle>
          <DialogDescription>
            Fill the form below to add a new transaction.
          </DialogDescription>
        </DialogHeader>
        <CreateTransaction onSubmit={handleSubmit} update={transaction} />
      </DialogContent>
    </Dialog>
  );
}

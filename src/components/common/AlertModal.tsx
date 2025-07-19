import { AlertDialog } from "../ui/alert-dialog";

export function AlertModal({ openAlert, setOpenAlert, children }) {
  return (
    <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
      {children}
    </AlertDialog>
  );
}

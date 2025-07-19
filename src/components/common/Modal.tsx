import { Dialog } from "../ui/dialog";

export function Modal({ open, setOpen, children }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div>
        {/* <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)}>New Task</Button>
        </DialogTrigger> */}
        {children}
      </div>
    </Dialog>
  );
}

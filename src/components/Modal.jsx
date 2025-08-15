import { createPortal } from "react-dom";
import { useImperativeHandle, forwardRef, useRef } from "react";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md m-auto"
    >
      {children}
      <form method="dialog">
        <Button className="mt-4 text-right px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 cursor-pointer">
          {buttonCaption}
        </Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

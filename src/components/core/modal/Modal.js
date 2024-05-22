import React,{useRef,useEffect} from "react";
import cx from "classnames";
import "./Modal.css";

function Modal({
  show,
  modalHeader,
  children,
  actions,
  className,
  size,
  onClose,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, show]);
  return (
    <>
      {show
        && (
          <>
            <div className={cx("modal-backdrop", "fade", "show")} />
            <div className={cx("modal", "show")}>
              <div
                className={cx("modal-dialog", "modal-dialog-centered", size)}
              >
                <div className={cx("modal-content", className)} ref={modalRef} >
                  <div className='modal-header'>
                    {modalHeader}
                  </div>
                  <div className="modal-body">
                    {children}
                  </div>
                  {actions && (
                    <div className="footer">
                      {actions}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
    </>
  );
}

export default Modal;

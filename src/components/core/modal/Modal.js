import React  from "react";
import cx from "classnames";
import "./Modal.css";

function Modal({
  show,
  modalHeader,
  children,
  actions,
  className,
  size,
  headerClassName,
}) {
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
                <div className={cx("modal-content", className)}>
                  <div className={cx("modal-header", headerClassName)}>
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

import { useEffect } from "react";

function useOutsideClickHandler({
  ref,
  outsideClickHandler,
}) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current
        && !ref.current.contains(event.target)
      ) {
        outsideClickHandler();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [outsideClickHandler, ref]);
}

export default useOutsideClickHandler;

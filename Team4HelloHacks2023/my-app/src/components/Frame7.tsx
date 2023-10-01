import { FunctionComponent, useCallback } from "react";
import styles from "./Frame7.module.css";

interface Frame7Props {
  onClose?: () => void; // Making it optional here, remove '?' if it should be mandatory
}

const Frame7: FunctionComponent<Frame7Props> = ({ onClose }) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className={styles.vectorParent}>
      <img className={styles.frameChild} alt="" src="/rectangle-21.svg" />
      <div className={styles.hasBeenNotified}>
        ___ has been notified and will reach out to you soon!
      </div>
      {/* Example usage: Add a button or some element to close */}
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Frame7;

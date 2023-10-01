import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Stateclosed from "./Stateclosed";
import styles from "./Frame4.module.css";

// Define the prop types
interface Frame4Props {
  onClose?: () => void; // Making it optional here, remove '?' if it should be mandatory
}

const Frame4: FunctionComponent<Frame4Props> = ({ onClose }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/frame-2");
    onClose?.(); // Safely call onClose if it's defined
  }, [navigate, onClose]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/frame-2");
    onClose?.(); // Safely call onClose if it's defined
  }, [navigate, onClose]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.subject}>Subject</div>
      <div className={styles.rectangleWrapper}>
        <div className={styles.componentChild} />
      </div>
      <div className={styles.hours}>Hours</div>
      <div className={styles.rectangleGroup} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.ok}>OK</div>
      </div>
      <div className={styles.rectangleContainer} onClick={onGroupContainer1Click}>
        <div className={styles.groupItem} />
        <div className={styles.cancel}>CANCEL</div>
      </div>
      <Stateclosed propTop="163px" propLeft="101px" />
    </div>
  );
};

export default Frame4;

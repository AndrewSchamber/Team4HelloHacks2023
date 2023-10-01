import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LearningContainer.module.css";

const LearningContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <div className={styles.beginYourJourney}>
        Begin your journey into better learning
      </div>
      <div className={styles.nextParent} onClick={onFrameContainerClick}>
        <div className={styles.next}>{`Next `}</div>
        <img className={styles.frameChild} alt="" src="/arrow-1.svg" />
      </div>
      <div className={styles.frame1}>
        <div className={styles.frameItem} />
        <div className={styles.whatTypeOf}>What type of learner are you?</div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.frameInner} />
        <div className={styles.whatSubjectsAre}>
          What subjects are you interested in?
        </div>
      </div>
    </div>
  );
};

export default LearningContainer;

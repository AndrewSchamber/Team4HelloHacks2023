import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LearningContainer1.module.css";

const LearningContainer1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/frame-13");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <img className={styles.frameChild} alt="" src="/rectangle-19.svg" />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <div className={styles.beginYourJourney}>
        Begin your journey into better learning
      </div>
      <div className={styles.email}>Email</div>
      <div className={styles.password}>Password</div>
      <div className={styles.signUpNowWrapper} onClick={onFrameContainerClick}>
        <div className={styles.signUpNow}>Sign Up Now</div>
      </div>
    </div>
  );
};

export default LearningContainer1;

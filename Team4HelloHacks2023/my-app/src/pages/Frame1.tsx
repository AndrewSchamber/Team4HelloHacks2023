import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame1.module.css";

const Frame1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/frame-13");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.screenshot20230930At344Parent}>
        <img
          className={styles.screenshot20230930At344}
          alt=""
          src="/screenshot-20230930-at-344-2@2x.png"
        />
        <div className={styles.logIn}>Log in</div>
      </div>
      <div className={styles.frameWrapper}>
        <div
          className={styles.signUpNowWrapper}
          onClick={onFrameContainer1Click}
        >
          <div className={styles.signUpNow}>Sign Up Now</div>
        </div>
      </div>
      <img className={styles.frameChild} alt="" src="/rectangle-19.svg" />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <div className={styles.beginYourJourney}>
        Begin your journey into better learning
      </div>
      <div className={styles.email}>Email</div>
      <div className={styles.password}>Password</div>
    </div>
  );
};

export default Frame1;

import { FunctionComponent } from "react";
import LearningContainer1 from "../components/LearningContainer1";
import styles from "./Frame.module.css";

const Frame9: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frame}>
        <LearningContainer1 />
      </div>
      <div className={styles.frame1}>
        <img
          className={styles.screenshot20230930At344}
          alt=""
          src="/screenshot-20230930-at-344-22@2x.png"
        />
        <div className={styles.logIn}>Log in</div>
      </div>
    </div>
  );
};

export default Frame9;

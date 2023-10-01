import { FunctionComponent } from "react";
import LearningContainer from "../components/LearningContainer";
import styles from "./Frame8.module.css";

const Frame8: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameIcon} alt="" src="/rectangle-19.svg" />
      <div className={styles.frame}>
        <LearningContainer />
      </div>
    </div>
  );
};

export default Frame8;

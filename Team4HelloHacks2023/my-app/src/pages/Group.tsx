import { FunctionComponent } from "react";
import styles from "./Group.module.css";

const Group: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.div}>...</div>
        <div className={styles.div1}>...</div>
        <div className={styles.div2}>...</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.div}>None</div>
        <img className={styles.polygonIcon} alt="" src="/polygon-34.svg" />
      </div>
    </div>
  );
};

export default Group;

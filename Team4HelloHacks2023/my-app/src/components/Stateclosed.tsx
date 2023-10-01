import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Stateclosed.module.css";

type StateclosedType = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Stateclosed: FunctionComponent<StateclosedType> = ({
  propTop,
  propLeft,
}) => {
  const stateclosedStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.stateclosed} style={stateclosedStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.none}>None</div>
        <img className={styles.groupItem} alt="" src="/polygon-2.svg" />
      </div>
    </div>
  );
};

export default Stateclosed;

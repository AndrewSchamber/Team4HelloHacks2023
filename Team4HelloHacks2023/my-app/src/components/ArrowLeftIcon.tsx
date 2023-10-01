import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ArrowLeftIcon.module.css";

type ArrowLeftIconType = {
  /** Style props */
  propLeft?: CSSProperties["left"];

  /** Action props */
  onArrowLeftClick?: () => void;
};

const ArrowLeftIcon: FunctionComponent<ArrowLeftIconType> = ({
  propLeft,
  onArrowLeftClick,
}) => {
  const arrowLeftIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <img
      className={styles.arrowLeftIcon}
      alt=""
      src="/arrow-left.svg"
      onClick={onArrowLeftClick}
      style={arrowLeftIconStyle}
    />
  );
};

export default ArrowLeftIcon;

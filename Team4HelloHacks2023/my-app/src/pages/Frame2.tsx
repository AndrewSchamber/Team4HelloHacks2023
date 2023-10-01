import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame2.module.css";

const Frame2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onScreenshot20230930At344Click = useCallback(() => {
    navigate("/frame-13");
  }, [navigate]);

  const onGroupIconClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img
        className={styles.screenshot20230930At344}
        alt=""
        src="/screenshot-20230930-at-344-3@2x.png"
        onClick={onScreenshot20230930At344Click}
      />
      <div className={styles.ellipseParent}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.m}>M</div>
        <div className={styles.frameInner} />
        <div className={styles.m1}>M</div>
      </div>
      <div className={styles.ellipseGroup}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.m}>M</div>
        <div className={styles.frameInner} />
        <div className={styles.m1}>M</div>
      </div>
      <div className={styles.ellipseContainer}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.m}>M</div>
        <div className={styles.frameInner} />
        <div className={styles.m1}>M</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.m}>M</div>
        <div className={styles.frameInner} />
        <div className={styles.m1}>M</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild10} />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild11} />
        <div className={styles.frameChild12} />
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild10} />
          <div className={styles.rectangleParent2}>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameChild10} />
          </div>
        </div>
      </div>
      <div className={styles.hours}>1/20 hours</div>
      <div className={styles.hours1}>1/20 hours</div>
      <div className={styles.hours2}>1/20 hours</div>
      <div className={styles.hours3}>1/20 hours</div>
      <div className={styles.ellipseParent1}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.m}>M</div>
        <div className={styles.frameInner} />
        <div className={styles.m1}>M</div>
      </div>
      <div className={styles.ellipseParent2}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.m}>M</div>
        <div className={styles.frameInner} />
        <div className={styles.m1}>M</div>
      </div>
      <div className={styles.ellipseParent3}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.m}>M</div>
        <div className={styles.frameInner} />
        <div className={styles.m1}>M</div>
      </div>
      <div className={styles.ellipseParent4}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.m}>M</div>
        <div className={styles.frameInner} />
        <div className={styles.m1}>M</div>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild10} />
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.frameChild11} />
        <div className={styles.frameChild12} />
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild10} />
          <div className={styles.rectangleParent2}>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameChild10} />
          </div>
        </div>
      </div>
      <div className={styles.hours4}>1/20 hours</div>
      <div className={styles.hours5}>1/20 hours</div>
      <div className={styles.hours6}>1/20 hours</div>
      <div className={styles.hours7}>1/20 hours</div>
      <img
        className={styles.groupIcon}
        alt=""
        src="/group-2.svg"
        onClick={onGroupIconClick}
      />
    </div>
  );
};

export default Frame2;

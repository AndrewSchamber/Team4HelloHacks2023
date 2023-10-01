import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../components/ArrowLeftIcon";
import styles from "./Frame5.module.css";

const Frame5: FunctionComponent = () => {
  const navigate = useNavigate();

  const onArrowLeftClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  const onScreenshot20230930At344Click = useCallback(() => {
    navigate("/frame-13");
  }, [navigate]);

  const onGroupIconClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.learnToUse}>Learn to use ___ by ...</div>
      <img
        className={styles.frameItem}
        alt=""
        src="/rectangle-7.svg"
        onClick={onRectangle1Click}
      />
      <div className={styles.frameInner} onClick={onRectangle2Click} />
      <div className={styles.rectangleDiv} onClick={onRectangle3Click} />
      <div className={styles.frameChild1} onClick={onRectangle4Click} />
      <div className={styles.frameChild2} onClick={onRectangle5Click} />
      <div className={styles.frameChild3} onClick={onRectangle6Click} />
      <img
        className={styles.screenshot20230930At344}
        alt=""
        src="/screenshot-20230930-at-344-31@2x.png"
        onClick={onScreenshot20230930At344Click}
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <img className={styles.groupInner} alt="" src="/line-11.svg" />
        <div className={styles.whatWouldYou}>
          What would you like to learn today?
        </div>
      </div>
      <div className={styles.howTo}>How to ___ by ...</div>
      <div className={styles.masterclassBy}>___ Masterclass by ...</div>
      <div className={styles.fundamentalsOf}>Fundamentals of ___ by ...</div>
      <div className={styles.basicsBy}>___ basics by ...</div>
      <div className={styles.anIntroductionTo}>
        An introduction to ___ by ...
      </div>
      <img
        className={styles.groupIcon}
        alt=""
        src="/group-2.svg"
        onClick={onGroupIconClick}
      />
      <ArrowLeftIcon propLeft="24px" onArrowLeftClick={onArrowLeftClick} />
    </div>
  );
};

export default Frame5;

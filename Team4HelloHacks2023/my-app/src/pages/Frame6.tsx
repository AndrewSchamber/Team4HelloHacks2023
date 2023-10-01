import { FunctionComponent, useState, useCallback } from "react";
import Frame7 from "../components/Frame7";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../components/ArrowLeftIcon";
import styles from "./Frame6.module.css";

const Frame6: FunctionComponent = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const onArrowLeftClick = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameIconClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi dolor, hendrerit sit amet laoreet vel, feugiat id urna. Nulla at tellus fringilla, scelerisque eros ac, blandit ex. Donec blandit vulputate egestas. Fusce at augue ac ligula bibendum iaculis. Fusce vitae urna tortor. Donec eu aliquam ipsum. Quisque elementum, nisi vel condimentum placerat, enim quam euismod massa, nec tristique augue ligula scelerisque eros. Morbi hendrerit sem nunc, ue. `}</div>
        <ArrowLeftIcon onArrowLeftClick={onArrowLeftClick} />
        <div className={styles.frameItem} />
        <div className={styles.rectangleGroup} onClick={openFrame}>
          <div className={styles.groupChild} />
          <div className={styles.connect}>Connect</div>
        </div>
        <img
          className={styles.frameInner}
          alt=""
          src="/group-2.svg"
          onClick={onFrameIconClick}
        />
        <img
          className={styles.screenshot20230930At344}
          alt=""
          src="/screenshot-20230930-at-344-31@2x.png"
        />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame7 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame6;

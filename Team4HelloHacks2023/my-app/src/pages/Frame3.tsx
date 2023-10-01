import { FunctionComponent, useState, useCallback } from "react";
import Frame4 from "../components/Frame4";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Frame3.module.css";

const Frame3: FunctionComponent = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/frame-15");
  }, [navigate]);

  return (
    <>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.screenshot20230930At344}
          alt=""
          src="/screenshot-20230930-at-344-21@2x.png"
        />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div
          className={styles.learnShit1Parent}
          onClick={onGroupContainer1Click}
        >
          <img
            className={styles.learnShit1}
            alt=""
            src="/learn-shit-1@2x.png"
          />
          <div className={styles.discoverOurCourses}>Discover Our Courses</div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.groupInner} />
          <div className={styles.ellipseDiv} />
          <div className={styles.m}>M</div>
        </div>
        <div className={styles.rectangleContainer} onClick={openFrame}>
          <div className={styles.rectangleDiv} />
          <div className={styles.logHours}>
            <p className={styles.logHours1}>Log Hours</p>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <img className={styles.lineIcon} alt="" src="/line-1.svg" />
          <div className={styles.whatWouldYou}>
            What would you like to learn today?
          </div>
        </div>
        <div className={styles.goals1Parent} onClick={onGroupContainer5Click}>
          <img className={styles.goals1Icon} alt="" src="/goals-1@2x.png" />
          <div className={styles.planYourGoals}>{`Plan Your Goals `}</div>
        </div>
        <div className={styles.work1Parent}>
          <img className={styles.work1Icon} alt="" src="/work-1@2x.png" />
          <div className={styles.applyYourSkills}>Apply Your Skills</div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame4 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame3;

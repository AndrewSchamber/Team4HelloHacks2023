import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame11.module.css";

const Frame11: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/frame-25");
  }, [navigate]);

  return (
    <div className={styles.learnlnkParent}>
      <div className={styles.learnlnk}>LearnL|nk</div>
      <div className={styles.planDiscoverApplyContainer}>
        <p className={styles.plan}>Plan.</p>
        <p className={styles.plan}>Discover.</p>
        <p className={styles.plan}>Apply.</p>
      </div>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.signUpFor}>Sign Up For Free!</div>
      </div>
    </div>
  );
};

export default Frame11;

import React from 'react';
import styles from './SkillIcon.module.css';

type SkillIconProps = {
  logo: string;
  name: string;
  level: number; // percentage from 0 to 100
};

const SkillIcon: React.FC<SkillIconProps> = ({ logo, name, level }) => {
  return (
    <div className={styles.skillItem}>
      <img src={logo} alt={name} title={name} />
      <div className={styles.skillBar}>
        <div className={styles.skillFill} style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default SkillIcon;

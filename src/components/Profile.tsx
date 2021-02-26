import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export default function Profile() {
  const {level} = useContext(ChallengeContext)

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png?itok=Vhm0RCa3"
        alt="User photo"
      />
      <div>
        <strong>Username</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}

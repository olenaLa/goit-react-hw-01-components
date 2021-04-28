import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendCard({ id, avatar, name, isOnline }) {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.statusOnline : styles.statusOffline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="45" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
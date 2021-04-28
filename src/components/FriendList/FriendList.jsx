import FriendCard from './FriendCard';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  if (friends.length === 0) return null;
  return <ul className={styles.friendList}>{friends.map(FriendCard)}</ul>;
}
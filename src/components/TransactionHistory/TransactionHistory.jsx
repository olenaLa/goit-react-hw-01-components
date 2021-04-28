import styles from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';


function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>

      <tbody>{items.map(TransactionHistoryItem)}</tbody>
    </table>
  );
}

export default TransactionHistory;
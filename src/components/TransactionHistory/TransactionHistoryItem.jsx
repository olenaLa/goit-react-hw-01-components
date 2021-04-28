import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} className={styles.row}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.number.isRequired,
};

export default TransactionHistoryItem;
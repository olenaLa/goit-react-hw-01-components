import Statistics from './Statistics';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function StatisticsList({ title, stats }) {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((item, index) => (
          <li
            className={styles.item}
            key={item.id}
            style={{ backgroundColor: colors[index] }}
          >
            <Statistics label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
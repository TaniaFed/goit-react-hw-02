import styles from './Description.module.css';
const DescriptionTitle = () => {
  return (
    <>
      <h1 className={styles.appName}>Sip Happens Café</h1>
      <p className={styles.appText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};
export default DescriptionTitle;

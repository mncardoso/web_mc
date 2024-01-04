import styles from './Button.module.css';

const ButtonMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={styles.outline} onClick={onClick}>
      <div className={styles.area}>
        <div className={styles.label}>☰</div>
      </div>
    </button>
  );
};

export default ButtonMenu;

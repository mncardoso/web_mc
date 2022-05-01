import styles from "../../styles/components/tag.module.css";

export let Tag = ({ text }) => {
	return <li className={styles.tag}>{text}</li>;
};

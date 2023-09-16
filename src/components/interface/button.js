import Link from "next/link";
import styles from "../../styles/interface/button.module.css";

export let Button = ({ action, lable, title, newTab = false }) => {
	if (newTab) {
		return (
			<Link href={action} passHref>
				<a
					className={styles.button}
					target="_blank"
					rel="noreferrer"
					title={title}
				>
					{lable}
				</a>
			</Link>
		);
	} else {
		return (
			<Link href={action} passHref replace>
				<a className={styles.button} title={title}>
					{lable}
				</a>
			</Link>
		);
	}
};

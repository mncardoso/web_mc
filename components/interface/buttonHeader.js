import Link from "next/link";
import styles from "../../styles/interface/buttonHeader.module.css";

export let ButtonHeader = ({
	action,
	lable,
	shorLable,
	title,
	newTab = false,
}) => {
	if (newTab) {
		return (
			<div className={styles.button_outline}>
				<div className={styles.button_area}>
					<Link href={action} passHref>
						<a
							className={styles.button_lable}
							target="_blank"
							rel="noreferrer"
							title={title}
						>
							{lable}
						</a>
					</Link>
				</div>
			</div>
		);
	}
	return (
		<div className={styles.button_outline}>
			<div className={styles.button_area}>
				<Link href={action} passHref replace>
					<a className={styles.button_lable} title={title}>
						{lable}
					</a>
				</Link>
			</div>
		</div>
	);
};

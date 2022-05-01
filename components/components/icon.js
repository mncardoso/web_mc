export let Icon = ({ type }) => {
	if (type === "work" || type === "internship") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="mdi-badge-account"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M17,3H14V6H10V3H7A2,2 0 0,0 5,5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V5A2,2 0 0,0 17,3M12,8A2,2 0 0,1 14,10A2,2 0 0,1 12,12A2,2 0 0,1 10,10A2,2 0 0,1 12,8M16,16H8V15C8,13.67 10.67,13 12,13C13.33,13 16,13.67 16,15V16M13,5H11V1H13V5M16,19H8V18H16V19M12,21H8V20H12V21Z" />
			</svg>
		);
	} else if (type === "education") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="mdi-school"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
			</svg>
		);
	} else if (type === "award") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="mdi-medal"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M20,2H4V4L9.81,8.36C6.14,9.57 4.14,13.53 5.35,17.2C6.56,20.87 10.5,22.87 14.19,21.66C17.86,20.45 19.86,16.5 18.65,12.82C17.95,10.71 16.3,9.05 14.19,8.36L20,4V2M14.94,19.5L12,17.78L9.06,19.5L9.84,16.17L7.25,13.93L10.66,13.64L12,10.5L13.34,13.64L16.75,13.93L14.16,16.17L14.94,19.5Z" />
			</svg>
		);
	}
	// } else if (type === "internship") {
	// 	return (
	// 		<svg
	// 			xmlns="http://www.w3.org/2000/svg"
	// 			version="1.1"
	// 			id="mdi-briefcase"
	// 			width="24"
	// 			height="24"
	// 			viewBox="0 0 24 24"
	// 		>
	// 			<path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />
	// 		</svg>
	// 	);
	// }
};

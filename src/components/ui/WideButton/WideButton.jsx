import styles from "./WideButton.module.css";

const WideButton = ({ className, borderColor, textColor, bgColor, text }) => {
	className = className || "";
	borderColor = borderColor || "black";
    bgColor = bgColor || "transparent"
    textColor = textColor || "black"
	return (
		<button
			style={{
				"--border-color": borderColor,
				"--text-color": textColor,
				"--bg-color": bgColor,
			}}
			className={styles["WideButton"] + " " + className}
		>
			{text}
		</button>
	);
};

export default WideButton;

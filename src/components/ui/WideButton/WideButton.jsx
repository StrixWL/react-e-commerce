import styles from "./WideButton.module.css";

const WideButton = ({ className, borderColor, textColor, bgColor, text, onClick }) => {
	className = className || "";
	borderColor = borderColor || "black";
    bgColor = bgColor || "transparent"
    textColor = textColor || "black"
	return (
		<button
		onClick={onClick}
			style={{
				"--border-color": borderColor,
				"--text-color": textColor,
				"--bg-color": bgColor,
			}}
			className={styles["WideButton"] + " " + className}
		>
			<span>{text}</span>
		</button>
	);
};

export default WideButton;

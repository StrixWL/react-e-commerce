import styles from "./WideInput.module.css";

const WideInput = ({onSubmit, buttonIcon, className, placeholder, color}) => {
    className = className || ''
	onSubmit = onSubmit || (() => {})
	placeholder = placeholder || "Placeholder"
	color = color || '255, 255, 255'
	return (
		<form 
		style={{
			"--color": color,
		}}
		onSubmit={onSubmit} className={styles["email-sub-form"] + ' ' + className}>
			<label htmlFor="email">
				<input
					type="text"
					id="email"
					name="email"
					placeholder={placeholder}
					required
				/>
				<span>{placeholder}</span>
			</label>
			<button type="submit">
				<img src={buttonIcon}></img>
			</button>
		</form>
	);
};

export default WideInput;

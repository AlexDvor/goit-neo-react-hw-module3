import s from './Button.module.css';

const Button = ({ children, onHandleClick, isVisible = true }) => {
	return (
		<button
			className={s.btn}
			onClick={() => onHandleClick(children)}
			style={{ display: isVisible ? 'inline-block' : 'none' }}
		>
			{children}
		</button>
	);
};

export default Button;

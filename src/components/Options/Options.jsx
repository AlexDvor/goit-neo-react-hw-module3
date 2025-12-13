import Button from '../Button/Button';
import s from './Options.module.css';

const Options = ({ handleClick, isVisible }) => {
	return (
		<div className={s.container}>
			<Button onHandleClick={handleClick}>Good</Button>
			<Button onHandleClick={handleClick}>Neutral</Button>
			<Button onHandleClick={handleClick}>Bad</Button>
			<Button onHandleClick={handleClick} isVisible={isVisible}>
				Reset
			</Button>
		</div>
	);
};

export default Options;

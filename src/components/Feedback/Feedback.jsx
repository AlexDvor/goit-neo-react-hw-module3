import Field from '../Field/Field';

const Feedback = ({ feedbackProps, total, positive }) => {
	const { good, neutral, bad } = feedbackProps;
	return (
		<>
			<Field>{`Good: ${good}`}</Field>
			<Field>{`Neutral: ${neutral}`}</Field>
			<Field>{`Bad: ${bad}`}</Field>
			<Field>{`Total: ${total}`}</Field>
			<Field>{`Positive: ${positive}%`}</Field>
		</>
	);
};

export default Feedback;

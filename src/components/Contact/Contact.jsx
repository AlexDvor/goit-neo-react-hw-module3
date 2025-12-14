import s from './Contact.module.css';

const Contact = ({ item, handlerRemove }) => {
	const { id, name, number } = item;
	return (
		<li className={s.item}>
			<div>
				<p>{name}</p>
				<p>{number}</p>
			</div>
			<div>
				<button onClick={() => handlerRemove(id)}>Delete</button>
			</div>
		</li>
	);
};

export default Contact;

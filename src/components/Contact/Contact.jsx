import s from './Contact.module.css';

const Contact = ({ item }) => {
	const { name, number } = item;
	return (
		<li className={s.item}>
			<div>
				<p>{name}</p>
				<p>{number}</p>
			</div>
			<div>
				<button>Delete</button>
			</div>
		</li>
	);
};

export default Contact;

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { CardSchema } from '../validation';

import s from './ContactForm.module.css';

const initialFieldsValue = {
	name: '',
	number: '',
};

const ContactForm = ({ handleAdd }) => {
	const handleSubmit = (value, action) => {
		const newItem = { ...value, id: nanoid() };
		handleAdd(newItem);
		action.resetForm();
	};

	return (
		<>
			<Formik
				initialValues={initialFieldsValue}
				validationSchema={CardSchema}
				onSubmit={handleSubmit}
			>
				<Form className={s.formWrap}>
					<div className={s.fieldBox}>
						<label htmlFor='name'>Name</label>
						<Field name='name' type='text' id='name' placeholder='Pedro' />
						<ErrorMessage name='name' component='p' className={s.error} />
					</div>
					<div className={s.fieldBox}>
						<label htmlFor='number'>Number</label>
						<Field
							name='number'
							type='text'
							id='number'
							placeholder='631-26-86'
						/>
						<ErrorMessage name='number' component='p' className={s.error} />
					</div>

					<button type='submit'>Add contact</button>
				</Form>
			</Formik>
		</>
	);
};

export default ContactForm;

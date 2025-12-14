import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

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
			<Formik initialValues={initialFieldsValue} onSubmit={handleSubmit}>
				<Form className={s.formWrap}>
					<div className={s.fieldBox}>
						<label htmlFor='name'>Name</label>
						<Field name='name' type='text' id='name' />
						{/* <ErrorMessage name='name' component='div' /> */}
					</div>
					<div className={s.fieldBox}>
						<label htmlFor='number'>Number</label>
						<Field name='number' type='phone' id='number' />
						{/* <ErrorMessage name='phone' component='div' /> */}
					</div>

					<button type='submit'>Add contact</button>
				</Form>
			</Formik>
		</>
	);
};

export default ContactForm;

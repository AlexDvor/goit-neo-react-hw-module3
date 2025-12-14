import { Formik, Form, Field, ErrorMessage } from 'formik';

import s from './ContactForm.module.css';

const initialFieldsValue = {
	name: '',
	phone: '',
};

const ContactForm = () => {
	const handleSubmit = (value, action) => {
		console.log(value);
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
						<label htmlFor='phone'>Number</label>
						<Field name='phone' type='phone' id='phone' />
						{/* <ErrorMessage name='phone' component='div' /> */}
					</div>

					<button type='submit'>Add contact</button>
				</Form>
			</Formik>
		</>
	);
};

export default ContactForm;

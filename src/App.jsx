import './App.css';

import Description from './components/Description/Description';
import { useEffect, useState } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const STORAGE_KEY = 'feedback';
const INITIAL_STATE = {
	good: 0,
	neutral: 0,
	bad: 0,
};

function App() {
	const [feedback, setFeedBack] = useState(() => {
		const getFeedBackData = localStorage.getItem(STORAGE_KEY);
		if (!getFeedBackData) return INITIAL_STATE;
		try {
			const parsed = JSON.parse(getFeedBackData);
			if (
				typeof parsed === 'object' &&
				parsed !== null &&
				'good' in parsed &&
				'neutral' in parsed &&
				'bad' in parsed
			) {
				return parsed;
			}
			return INITIAL_STATE;
		} catch (error) {
			console.warn(
				'Invalid feedback in localStorage, resetting to initial state.',
				error
			);
			return INITIAL_STATE;
		}
	});

	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
	const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
		} catch (error) {
			console.error('Failed to save feedback to localStorage:', error);
		}
	}, [feedback]);

	const updateFeedback = feedbackType => {
		if (typeof feedbackType !== 'string') return;
		const key = feedbackType.toLowerCase();

		if (key === 'reset') {
			setFeedBack(INITIAL_STATE);
			return;
		}

		const feedBackKeys = Object.keys(feedback);
		if (!feedBackKeys.includes(key)) return;
		setFeedBack(prev => ({ ...prev, [key]: prev[key] + 1 }));
	};

	return (
		<div className='container'>
			<Description
				title='Sip Happens Café'
				description='Please leave your feedback about our service by selecting one of the options below.'
			/>
			<Options handleClick={updateFeedback} isVisible={totalFeedback} />

			{totalFeedback > 0 ? (
				<Feedback
					feedbackProps={feedback}
					total={totalFeedback}
					positive={positiveFeedback}
				/>
			) : (
				<Notification>No feedback yet</Notification>
			)}
		</div>
	);
}

export default App;

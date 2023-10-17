import styles from "./FeedbackForm.module.css";

export default function FeedbackForm() {
	async function handleSubmit(data: FormData) {
		"use server";
		// const form = new FormData(e.target)

		const name = data.get("name");
		const email = data.get("email");
		const message = data.get("message");

		console.log({
			name,
			email,
			message,
		});
	}

	return (
		<div className={styles.feedbackForm}>
			<h1 className={styles.header}>Submit Your Feedback!</h1>
			{/* @ts-ignore */}
			<form action={handleSubmit}>
				<div>
					<label className={styles.inputFieldLabel}>Name:</label>
					<input
						name="name"
						type="text"
						required
						placeholder="Enter your full name"
						className={styles.inputField}
					/>
				</div>
				<div>
					<label className={styles.inputFieldLabel}>Email:</label>
					<input
						name="email"
						type="email"
						required
						placeholder="Enter your email"
						className={styles.inputField}
					/>
				</div>
				<div>
					<label className={styles.inputFieldLabel}>Message:</label>
					<textarea
						name="message"
						required
						placeholder="Enter your feedback"
						className={styles.textareaField}
					></textarea>
				</div>
				<div className={styles.submitButtonContainer}>
					<input type="submit" value="Submit" className={styles.submitButton} />
				</div>
			</form>
		</div>
	);
}

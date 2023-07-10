import styles from './FeedbackForm.module.css';

const FeedbackForm: React.FC = () => {
  return (
    <div>
      <div className={styles.feedbackForm}>
        <h1 className={styles.header}>Submit Your Feedback!</h1>
        <form>
          <div>
            <label className={styles.inputFieldLabel}>Name:</label>
            <input type="text" required placeholder="Enter your name" className={styles.inputField} />
          </div>
          <div>
            <label className={styles.inputFieldLabel}>Email:</label>
            <input type="email" required placeholder="Enter your email" className={styles.inputField} />
          </div>
          <div>
            <label className={styles.inputFieldLabel}>Message:</label>
            <textarea required placeholder="Enter your message" className={styles.inputField}></textarea>
          </div>
          <div className={styles.submitButtonContainer}>
            <input type="submit" value="Submit" className={styles.submitButton} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;


import styles from './FeedbackForm.module.css';

const FeedbackForm: React.FC = () => {
    return (
        <div className={styles.feedbackForm}>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" required className={styles.inputField} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" required className={styles.inputField} />
                </div>
                <div>
                    <label>Feedback:</label>
                    <textarea required className={styles.inputField} />
                </div>
                <div>
                    <input type="submit" value="Submit" className={styles.submitButton} />
                </div>
            </form>
        </div>
    );
};

export default FeedbackForm;

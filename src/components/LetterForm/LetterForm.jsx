import { useState } from 'react';
import { useNavigate } from 'react-router';


const LetterForm = (props) => {
    // console.log('LetterForm props:', props);
    const [formData, setFormData] = useState({
        mailboxId: props.mailboxes.length > 0 ? props.mailboxes[0]._id : "",
        recipient: "",
        message: ""
    });
    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Convert mailboxId to a number (since select values come as strings)
        const letterData = {
            ...formData,
            mailboxId: Number(formData.mailboxId)
        };
        // Submit the new letter
        props.onSubmit(letterData);

        // Navigate to the mailbox details page
        navigate(`/mailboxes/${formData.mailboxId}`);
    };

    return (
        <main>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Select a mailbox:</label>
                <select
                    id="mailboxId"
                    name="mailboxId"
                    value={formData.mailboxId}
                    onChange={handleChange}
                >
                    {props.mailboxes.map(mailbox => (
                        <option key={mailbox._id} value={mailbox._id}>
                            Mailbox {mailbox._id}
                        </option>
                    ))}
                </select>

                <label htmlFor="recipient">Recipient</label>
                <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleChange}
                    placeholder="Recipient Name"
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="5"
                ></textarea>

                <button type="submit">Submit</button>


            </form>
        </main>
    );
};



export default LetterForm;
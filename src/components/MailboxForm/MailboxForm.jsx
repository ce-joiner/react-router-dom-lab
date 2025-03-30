import { useState } from 'react';
import { useNavigate } from 'react-router';


const MailboxForm = (props) => {
    const [formData, setFormData] = useState({
        boxOwner: "",
        boxSize: "Small"
    });

    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Call the onSubmit function passed from the parent component
        if (props.onSubmit) {
            props.onSubmit(formData);
            // Navigate to the mailbox list after submission
            navigate('/mailboxes');
        };
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <main>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter a boxholder:</label>
                <input
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                />

                <label htmlFor="boxSize">Select a box size:</label>
                <select
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </main>
    );
}




export default MailboxForm;
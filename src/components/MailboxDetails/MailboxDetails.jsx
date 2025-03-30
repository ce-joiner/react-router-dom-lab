import { useParams, Link } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    // Find the selected mailbox
    const selectedBox = props.mailbox ? props.mailbox.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    ) : null;
    // Filter letters for this mailbox
    const mailboxLetters = props.letters ? props.letters.filter(
        (letter) => letter.mailboxId === Number(mailboxId)
    ) : [];


    // If mailbox not found, display not found message
    if (!selectedBox) {
        return (
            <main className="not-found">
                <h1>Mailbox Not Found!</h1>
                <p>Sorry, we couldn't find a mailbox with ID: {mailboxId}</p>
                <Link to="/mailboxes" className="back-link">Return to Mailbox List</Link>
            </main>
        );
    }

    return (
        <>
            <h1>Mailbox {selectedBox._id}</h1>
            <h2>Details</h2>
            <dl>
                <dt>Boxholder:</dt>
                <dd>{selectedBox.boxOwner}</dd>
                <dt>Box Size:</dt>
                <dd>{selectedBox.boxSize}</dd>
            </dl>

            <h2>Letters</h2>
            {mailboxLetters.length > 0 ? (
                <div className="letters-container">
                    {mailboxLetters.map((letter, index) => (
                        <div key={index} className="letter">
                            <p>Dear {letter.recipient},</p>
                            <p className="letter-message">{letter.message}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No letters in this mailbox yet.</p>
            )}
            <Link to="/mailboxes">Back to Mailbox List</Link>
        </>
    );
}








export default MailboxDetails;
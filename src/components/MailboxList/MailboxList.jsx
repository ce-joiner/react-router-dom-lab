import { Link } from 'react-router';

const MailboxList = (props) => {
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailbox.map((currentMailbox) => (
                    <li key={currentMailbox._id}>
                        <Link to={`/mailboxes/${currentMailbox._id}`}>
                            <div className="mail-box">
                                Mailbox {currentMailbox._id}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};



export default MailboxList;
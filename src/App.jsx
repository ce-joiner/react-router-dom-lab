import { useState } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from "./components/NavBar/NavBar"
import MailboxForm from "./components/MailboxForm/MailboxForm"
import MailboxList from "./components/MailboxList/MailboxList"
import MailboxDetails from "./components/MailboxDetails/MailboxDetails"
import LetterForm from "./components/LetterForm/LetterForm";




const App = () => {

  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (newMailboxData) => {
    const newMailbox= {
      ...newMailboxData, _id: mailboxes.length + 1
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  const addLetter = (newLetterData) => {
    setLetters([...letters, newLetterData]);
  };


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailbox={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm onSubmit={addBox}/>} />
        {/* pass the letters array to the MailboxDetails component: */}
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailbox={mailboxes} letters={letters}/>} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
        {/* Passing the mailboxes array to the form so it can create the select options  */}
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} onSubmit={addLetter} />} />
      </Routes>
    </>
  );
};

export default App;
import React, { useState } from 'react';
import './App.css';
import { Note } from "./models/note.model"
import "./components/Headers"
import Headers from './components/Headers';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';

function App() {

  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule Meeting with UI/UX team",
    color: "#dfdfdf",
    date: (new Date).toString(),
  }]);

  return (
    <>
      <Headers />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes ={notes} setNotes = {setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
          <CreateNotes notes = {notes} setNotes = {setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

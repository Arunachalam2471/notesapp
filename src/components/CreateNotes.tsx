import * as React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Note } from "../models/note.model"
import { useState, useRef } from 'react';
import { text } from 'stream/consumers';

interface ICreateNotesProps {
    notes : Note[];
    setNotes : React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {
    
    const[error, setError] = useState<string>("");
    const titleRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);
    const colorRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) : void =>{
        e.preventDefault();
        if(titleRef.current?.value === "" || textRef.current?.value === ""){
            return setError("All fields are mandatory")
        }
        setError("")
        setNotes([...notes,{
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text : (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString(),
        }])

    }

    return (
        <>
            <h2>Create Notes</h2>
            <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId='formBasicTitle'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' placeholder="Enter Title for the note" ref={titleRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId='formBasicText'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control placeholder='Enter your notes' as="textarea" rows={3} ref={textRef} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                    <Form.Control style={{width : "40px", height : "40px"}} type='color' id='colorInput' defaultValue="#dfdfdf" title='choose your color' ref={colorRef} />
                </Form.Group>
                <Button type="submit" variant="primary">Submit</Button>
            </Form>
        </>
    )
};

export default CreateNotes;

import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const host = "http://localhost:5000"
    const notesInitial = []
      
    const [notes, setNotes] =  useState(notesInitial)

    // Get all Notes 
    const getNotes = async ()=>{
        //  API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWZkOTExNDk5ZmRlYjExMTYxZDU0In0sImlhdCI6MTczODE0NTI5NH0.MVMdIuhyp5YarpuuZFTfN_1bbxfVkdXtAJvN8tV4xuw',
            },
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }


    //   Add a Note 
    const addNote = async (title, description, tag)=>{
        //  API Call
        const response = await fetch(`${host}/api/notes/addnote`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWZkOTExNDk5ZmRlYjExMTYxZDU0In0sImlhdCI6MTczODE0NTI5NH0.MVMdIuhyp5YarpuuZFTfN_1bbxfVkdXtAJvN8tV4xuw',
            },
            body:JSON.stringify({title, description, tag})
        });

        const json = await response.json();
        console.log(json)
        
        // Logic to Add in Client site
        const note = {
            "_id": "672954a8efbf25ec6a0f158d1c5b",
            "user": "6799fd92115499fdeb11161d54",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2025-01-29T19:18:19.605Z",
            "__v": 0
          }
        setNotes(notes.concat(note))
    }

    //  Delete a Note
    const deleteNote = async(id)=>{
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWZkOTExNDk5ZmRlYjExMTYxZDU0In0sImlhdCI6MTczODE0NTI5NH0.MVMdIuhyp5YarpuuZFTfN_1bbxfVkdXtAJvN8tV4xuw',
            },
        });
        const json = response.json();
        console.log(json)

        // Logic to delete in Client site
        console.log("Note deleting.." + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }


    // Edit a Note
    const editNote = async (id, title, description, tag) =>{
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWZkOTExNDk5ZmRlYjExMTYxZDU0In0sImlhdCI6MTczODE0NTI5NH0.MVMdIuhyp5YarpuuZFTfN_1bbxfVkdXtAJvN8tV4xuw',
            },
            body:JSON.stringify({title, description, tag})
        });
        const json = await response.json();
        console.log(json)

        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in Client site
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if(element._id === id){
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }


    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "679a5d6b3826e45c384681c6c",
          "user": "6799fd9114959fdeb11161d54",
          "title": "My Title2",
          "description": "Do work your self",
          "tag": "personal",
          "date": "2025-01-29T16:55:07.681Z",
          "__v": 0
        },
        {
          "_id": "679a7a6e6fe3c6a0f158d1c2c",
          "user": "6799fd9114299fdeb11161d54",
          "title": "My Title2",
          "description": "keep it up!",
          "tag": "Youtube",
          "date": "2025-01-29T18:58:54.207Z",
          "__v": 0
        },
        {
          "_id": "679a7a806fe7c6a0f158d1c2e",
          "user": "6799fd9114599fdeb11161d54",
          "title": "My Title2",
          "description": "keep it up, letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T18:59:12.468Z",
          "__v": 0
        },
        {
          "_id": "679a7b586fec56a0f158d1c38",
          "user": "6799fd9161499fdeb11161d54",
          "title": "My Title2",
          "description": "keep it up, letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:02:48.546Z",
          "__v": 0
        },
        {
          "_id": "679a7b856fec6a50f158d1c3a",
          "user": "6799fd911499fd5eb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:03:33.163Z",
          "__v": 0
        },
        {
          "_id": "679a7da26fec6a40f158d1c45",
          "user": "6799fd6911499fdeb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:12:34.723Z",
          "__v": 0
        },
        {
          "_id": "679a7de964fec6a0f158d1c47",
          "user": "6799fd4911499fdeb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:13:45.798Z",
          "__v": 0
        },
        {
          "_id": "679a7dea64fec6a0f158d1c49",
          "user": "6799fd9114699fdeb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:13:46.265Z",
          "__v": 0
        },
        {
          "_id": "679a7de5a6fec6a0f158d1c4d",
          "user": "6799fd9211499fdeb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:13:46.522Z",
          "__v": 0
        },
        {
          "_id": "6729a7efb6fec6a0f158d1c5b",
          "user": "6799fd9211499fdeb11161d54",
          "title": "My Title15",
          "description": "wow, Letes go!",
          "tag": "Youtube2",
          "date": "2025-01-29T19:18:19.605Z",
          "__v": 0
        }
      ]
      
      const [notes, setNotes] =  useState(notesInitial)


    //   Add a Note 
    const addNote = (title, description, tag)=>{
        // Todo: API Call
        const note = {
            "_id": "6729a7efb6fec6a0f158d1c5b",
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
    const deleteNode = ()=>{
        
    }

    // Edit a Note
    const editNote = () =>{

    }


    return(
        <NoteContext.Provider value={{notes, addNote, deleteNode, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
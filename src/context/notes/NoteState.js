import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "679a5d6b3826e5c384681c6c",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title2",
          "description": "Do work your self",
          "tag": "personal",
          "date": "2025-01-29T16:55:07.681Z",
          "__v": 0
        },
        {
          "_id": "679a7a6e6fec6a0f158d1c2c",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title2",
          "description": "keep it up!",
          "tag": "Youtube",
          "date": "2025-01-29T18:58:54.207Z",
          "__v": 0
        },
        {
          "_id": "679a7a806fec6a0f158d1c2e",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title2",
          "description": "keep it up, letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T18:59:12.468Z",
          "__v": 0
        },
        {
          "_id": "679a7b586fec6a0f158d1c38",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title2",
          "description": "keep it up, letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:02:48.546Z",
          "__v": 0
        },
        {
          "_id": "679a7b856fec6a0f158d1c3a",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:03:33.163Z",
          "__v": 0
        },
        {
          "_id": "679a7da26fec6a0f158d1c45",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:12:34.723Z",
          "__v": 0
        },
        {
          "_id": "679a7de96fec6a0f158d1c47",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:13:45.798Z",
          "__v": 0
        },
        {
          "_id": "679a7dea6fec6a0f158d1c49",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:13:46.265Z",
          "__v": 0
        },
        {
          "_id": "679a7dea6fec6a0f158d1c4b",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:13:46.391Z",
          "__v": 0
        },
        {
          "_id": "679a7dea6fec6a0f158d1c4d",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:13:46.522Z",
          "__v": 0
        },
        {
          "_id": "679a7dea6fec6a0f158d1c4f",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title5",
          "description": "Letes go!",
          "tag": "Youtube",
          "date": "2025-01-29T19:13:46.645Z",
          "__v": 0
        },
        {
          "_id": "679a7efb6fec6a0f158d1c5b",
          "user": "6799fd911499fdeb11161d54",
          "title": "My Title15",
          "description": "wow, Letes go!",
          "tag": "Youtube2",
          "date": "2025-01-29T19:18:19.605Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] =  useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
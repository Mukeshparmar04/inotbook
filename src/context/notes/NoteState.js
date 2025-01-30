import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const s1 = {
        "name": "Tomy",
        "class": "5g"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Boby",
                "class": "8g"
            })
        }, 1000);
    }
    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
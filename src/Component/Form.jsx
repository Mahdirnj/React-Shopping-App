import "./Form.css"
import React, {useEffect, useState} from "react";

function Form() {
    const [number, setNumber] = useState(3);
    const [check, setCheck] = useState(null);

    useEffect(() => {
        console.log(number)
    }, []);

    function handleInputChange(event) {
        // Update the state with the new input value
        setNumber(event.target.value);
        if (check === null) {
            if (number >= 20) {
                alert("Oh you are above 20")
                setCheck(false)
            }
        }
    }

    return (
        <div>
            <form autoComplete="off">
                <label htmlFor='email'>Email : </label><br/>
                <input type='email' id='emailinp' placeholder='Email' autoComplete="off"/><br/>
                <label htmlFor='password'>Password: </label><br/>
                <input type='password' id='password' placeholder='Password' autoComplete={"off"}/><br/>
                <label htmlFor='Age'>Age : </label><br/>
                <input type="number" id="numberInput" value={number} onChange={handleInputChange} placeholder={10}/>
                <p>Current number: {number}</p>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}

export default Form
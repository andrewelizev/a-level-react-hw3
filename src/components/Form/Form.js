import React, { useState } from 'react';
import './Form.css'

function Form() {
    let [user, setUser] = useState('')
    let [pass, setPass] = useState('')
    let [error, setError] = useState('')

    const onClick = (event) => {
        event.preventDefault()

        if (!user && !pass) {
            setError('не заполнены поля')
        } else if (!user) {
            setError('не заполнено поле [user]')
        } else if (!pass) {
            setError('не заполнено поле [pass]')
        } else {
            setError('')
            console.log(`User: ${user}, Password: ${pass}`)
        }
    }

    const updateUserValue = (event) => {
        setUser(
            user = event.target.value
        )
    }

    const updatePassValue = (event) => {
        setPass(
            pass = event.target.value
        )
    }

    return (
        <form>
            <label htmlFor="user">User:</label>
            <input type="text" name="user" onChange={updateUserValue} />
            <label htmlFor="pass">Password:</label>
            <input type="password" name="pass" onChange={updatePassValue} />
            <button type="submit" onClick={onClick}>Submit</button>
            <div>{error}</div>
        </form>
    )
}

export default Form;
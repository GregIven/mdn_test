import React, { useState } from 'react'

const Form = ({ addNameFunc }) => {
    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log('handle submit clicked')
        e.preventDefault();
        if(name.length > 0) {
        addNameFunc(name);
            }
        setName("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label_lg">
                        What needs to be done?
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input_lg"
                    name="text"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn_primary btn_lg">
                    Add
                </button>
            </form>
        </div>
    )
}

export default Form

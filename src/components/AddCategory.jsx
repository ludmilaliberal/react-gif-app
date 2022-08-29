import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChanged = (event) => {
        setinputValue(event.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if (inputValue.trim().length<=1) return;
        onNewCategory (inputValue.trim())
        setinputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
            type='text'
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={onInputChanged}


        />
        </form>
        
    )
}

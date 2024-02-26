import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { IoMoon } from "react-icons/io5";
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .StyledAlign {
        display: flex;
        height: 50px;
        width: 100%;
        justify-content: space-between;
    }

    button {
        width: 50px;
        background-color: white;
        border-radius: 1px;
        border: 1px solid #333;
        color: #666;
    }
`;

const Input = styled.input`
    width: 70%;
    padding: 12px;
    border-radius: 1px;
    border: 1px solid #333;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;


const InsertForm = styled.form`
    width: 70%;
`;

function TodoHead() {
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onChange = e => setValue(e.target.value);
    
    const onSubmit = e => {
        e.preventDefault(); // 새로고침 방지
        if (value.trim() === '') {
            return;
        }
        dispatch({
          type: 'CREATE',
          todo: {
            id: nextId.current,
            text: value,
            done: false
          }
        });
        setValue('');
        nextId.current += 1;
      };

    return (
        <StyledHeader>
            <h1>TODO LIST</h1>
            <div className='StyledAlign'>
                <InsertForm onSubmit={onSubmit}>
                    <Input 
                        autoFocus 
                        placeholder="Create a new todo" 
                        value={value}
                        onChange={onChange}
                        onSubmit={onSubmit} 
                    />
                </InsertForm>
                <button onClick={onSubmit} >add</button>
            </div>
        </StyledHeader>
        
    );
}


export default TodoHead
import React from 'react'
import styled from 'styled-components';
import { IoMoon } from "react-icons/io5";

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

function TodoHead() {
    return (

        <StyledHeader>
            <h1>TODO LIST</h1>
            <div className='StyledAlign'>
                <Input autoFocus placeholder="Create a new todo" />
                <button><IoMoon /></button>
            </div>
        </StyledHeader>
        
    );
}


export default TodoHead
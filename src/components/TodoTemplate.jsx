import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 70%;

//   background: #888;
//   box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  padding-top: 50px;
  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
  }

export default TodoTemplate;
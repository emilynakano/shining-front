import styled from 'styled-components';

const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;

width: 100%;
max-width: 420px;

display: block;
background: white;
color: black;
border: 0;

cursor: pointer;
border-radius: 4px;
width: 100%;
padding: 16px;
font-weight: bold;
font-size: 15px;
transition: background-color 0.2s;
height: 50px;

&:hover {
  background-color: #d6d6cd;
}
`;

export default Button;

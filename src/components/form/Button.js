import styled from 'styled-components';

import { Vortex } from 'react-loader-spinner';

export default function Button({ text, loading }) {
  return (
    loading
      ? (
        <Container disabled>
          <Vortex
            visible
            height="40"
            width="40"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['black', 'black', 'black', 'black', 'black', 'red']}
          />
        </Container>
      )
      : (
        <Container>
          <span>{text}</span>
        </Container>
      )
  );
}

const Container = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;

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

import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 95%;
  max-width: 420px;

  /* autocomplet background*/
  input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #100E0E inset;
  }

  /* autocomplet font color */
  input:-webkit-autofill {
      -webkit-text-fill-color: white !important;
  }
  
`;

export default Form;

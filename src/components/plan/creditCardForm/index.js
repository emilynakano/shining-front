/* eslint-disable no-param-reassign */
import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as cardUtils from './cardUtils';
import FormValidations from './FormValidations';
import InputStyle from '../../form/Input';
import noteService from '../../../services/noteService';

import { useForm } from '../../../hooks/useForm';
import { ErrorMsg } from './ErrorMsg';

export default function CreditCardForm() {
  const { changeToPremiumPlan } = noteService();
  const navigate = useNavigate();
  const [card, setCard] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
    focused: '',
  });

  const {
    handleSubmit, handleChange, errors,
  } = useForm({
    validations: FormValidations,
    onSubmit: async (data) => {
      try {
        await changeToPremiumPlan();
        navigate('/home');
      } catch (err) {
        toast('An error occurred, check your data card!');
      }
    },
    initialValues: {
      cvc: '',
      expiry: '',
      name: '',
      number: '',
    },
  });
  const handleCardChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = cardUtils.formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = cardUtils.formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = cardUtils.formatCVC(target.value);
    } else if (target.name === 'name') {
      target.value = cardUtils.formatName(target.value);
    }

    setCard({ ...card, [target.name]: target.value });
  };
  const handleInputFocus = ({ target }) => {
    setCard({
      ...card,
      focused: target.name,
    });
  };
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <PaymentCard>
        <div>
          <Cards
            cvc={card.cvc}
            expiry={card.expiry}
            name={card.name}
            number={card.number}
            focused={card.focused}
          />
        </div>

        <FormWrapper>
          <InputStyle
            name="number"
            placeholder="Card Number"
            pattern="[\d| ]{16,22}"
            onChange={(e) => {
              handleChange('number')(e);
              handleCardChange(e);
            }}
            onFocus={(e) => handleInputFocus(e)}
            required
          />
          {errors.number && <ErrorMsg>{errors.number}</ErrorMsg>}
          <InputStyle
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={(e) => {
              handleChange('name')(e);
              handleCardChange(e);
            }}
            onFocus={(e) => handleInputFocus(e)}
            required
          />
          {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          <InputStyle
            name="expiry"
            placeholder="Expiry Date"
            pattern="\d\d/\d\d"
            onChange={(e) => {
              handleChange('expiry')(e);
              handleCardChange(e);
            }}
            onFocus={(e) => handleInputFocus(e)}
            required
          />
          {errors.expiry && <ErrorMsg>{errors.expiry}</ErrorMsg>}
          <InputStyle
            type="number"
            name="cvc"
            placeholder="Security Code"
            onChange={(e) => {
              handleChange('cvc')(e);
              handleCardChange(e);
            }}
            onFocus={(e) => handleInputFocus(e)}
            maxLength="4"
            minLength="3"
            required
          />
          {errors.cvc && <ErrorMsg>{errors.cvc}</ErrorMsg>}
        </FormWrapper>
      </PaymentCard>

      <ConfirmButton type="submit" value="FINALIZAR PAGAMENTO" />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  align-items:center;
  flex-direction: column;
`;

const PaymentCard = styled.div`
  padding-top: 20px;
  width: 100%;
  max-width: 670px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
 
 
  
`;

const ConfirmButton = styled.input`
  width: 100%;
  height: 55px;
  margin-top: 14px;
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Roboto';

  color: #000000;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  margin: 20px 0;
`;

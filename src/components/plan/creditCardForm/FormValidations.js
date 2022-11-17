/* eslint-disable no-use-before-define */
const validations = {

  name: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite um nome válido',
    },
  },

  number: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) >= 16,
      message: 'Digite um numero de cartão de crédito válido',
    },
  },

  cvc: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) === 3,
      message: 'Digite um código de segurança válido',
    },
  },

  expiry: {
    custom: {
      isValid: (value) => value.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
      message: 'Digite uma data de expiração válida',
    },
  },
};

export default validations;

function isValidString(value) {
  return value || value?.trim();
}

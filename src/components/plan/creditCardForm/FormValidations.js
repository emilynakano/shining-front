/* eslint-disable no-use-before-define */
const validations = {

  name: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Please enter a valid name',
    },
  },

  number: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) >= 16,
      message: 'Please enter a valid credit card number',
    },
  },

  cvc: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) === 3 || parseInt(value?.length, 10) === 4,
      message: 'Please enter a valid security code',
    },
  },

  expiry: {
    custom: {
      isValid: (value) => value.match(/^(0[1-9]|1[0-2])\/?([2-9]{4}|[2-9]{2})$/),
      message: 'Please enter a valid expiration date',
    },
  },
};

export default validations;

function isValidString(value) {
  return value || value?.trim();
}

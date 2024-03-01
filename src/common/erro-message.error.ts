import { ValidationArguments } from 'class-validator';

export const minLengthMessageError = (isMin = false) => {
  let message = '';
  if (isMin) {
    message += 'min';
  } else {
  }

  return (validationArguments: ValidationArguments) => {
    return 'ghalta' + message;
  };
};

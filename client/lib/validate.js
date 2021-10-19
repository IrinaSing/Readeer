import Ajv from './ajv7.bundle.js';

export const validate = (schema, data) => {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const isValid = validate(data);

  return {
    isValid,
    errors: validate.errors,
  };
};

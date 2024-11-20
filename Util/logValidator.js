const Ajv = require('ajv');
const addFormats = require("ajv-formats");
const ajv = new Ajv();
addFormats(ajv);

const schema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format:"email",
      description: "Student's email address"
    },
    password: {
      type: "string",
      minLength: 4, // Minimum length for simplicity
      maxLength: 20,
      pattern: "^[a-zA-Z0-9]+$", // Only alphanumeric characters
      description: "Password (alphanumeric, 4-20 characters)"
    }
  },
  required: [ "email", "password"], // Required fields
  additionalProperties: false // Disallow extra fields
};

module.exports = ajv.compile(schema);
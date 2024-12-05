import Ajv from 'ajv';
const addFormats = require("ajv-formats");
const ajv = new Ajv();
addFormats(ajv);

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 3,
      maxLength: 100,
      description: "Full name of the student"
    },
    id: {
      type: "string",
      pattern: "^[0-9]+$", // Ensures ID is numeric
      description: "Unique numeric ID for the student"
    },
    dept: {
      type: "string",
      minLength: 2,
      maxLength: 50,
      description: "Department of the student"
    },
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
    },
    confirmPassword: {
        type: "string",
        minLength: 4, 
        maxLength: 20,
        pattern: "^[a-zA-Z0-9]+$", 
      }
  },
  required: ["name", "id", "dept", "email", "password","confirmPassword"], // Required fields
  additionalProperties: false // Disallow extra fields
};

export default ajv.compile(schema);
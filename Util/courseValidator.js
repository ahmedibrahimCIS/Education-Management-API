import Ajv from 'ajv';
const ajv = new Ajv();


const schema = {
    type: "object",
    properties: {
      course_name: { type: "string", minLength: 1 },
      course_id: { type: "integer", minimum: 1 },
      credits: { type: "integer", minimum: 1, maximum: 5 },
    },
    required: ["course_name", "course_id", "credits"],
    additionalProperties: false,
  };

export default ajv.compile(schema);
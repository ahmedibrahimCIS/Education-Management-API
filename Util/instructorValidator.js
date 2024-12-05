import Ajv from 'ajv';
const ajv = new Ajv();

const schema ={
    type:"object",
    properties:{
        name:{
       type: "string",
        minLength: 3, 
        maxLength: 100 

        },
        id: {
          type: "integer",
          minimum: 1 
        },
        dept: {
            type: "string",
            enum: ["Computer Science", "Information Technology", "Software Engineering", "CyberSecurity", "Data Science","Bioinformatics","Scientific"]// Define valid departments
          },
         
          email:{
            type:"string",
           pattern:".+\@.+\..+"
          },
          password: {
            type: "string",
            minLength: 4, // Minimum length for simplicity
            maxLength: 20,
            pattern: "^[a-zA-Z0-9]+$", // Only alphanumeric characters
            description: "Password (alphanumeric, 4-20 characters)"
          }
        },
        required: ["name", "dept", "id","email","password"], 
        additionalProperties: false
    };

export default ajv.compile(schema);
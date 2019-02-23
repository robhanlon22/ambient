import Lambda = require("aws-lambda");

export const handler: Lambda.Handler = async () => {
  return {
    body: "Hello, World",
    statusCode: 200
  };
};

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/index');
const server = awsServerlessExpress.createServer(app);

module.exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context);
};
const ping = require('./ping');
const askQuestion = require('./askQuestion');
const getQuestions = require('./getQuestions');

module.exports = () => [].concat(
  ping,
  askQuestion,
  getQuestions,
);

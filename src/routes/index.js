const ping = require('./ping');
const askQuestion = require('./askQuestion');
const getQuestions = require('./getQuestions');
const getComments = require('./getComments');
const postComment = require('./postComment');

module.exports = () => [].concat(
  ping,
  askQuestion,
  getQuestions,
  getComments,
  postComment,
);

const { deleteLogFile } = require('../infrastructure/processManager');

function DeleteLog(filename) {
  return deleteLogFile(filename);
}

module.exports = DeleteLog;
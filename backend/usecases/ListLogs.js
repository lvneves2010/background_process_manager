const { listLogFiles } = require('../infrastructure/processManager');

function ListLogs() {
  return listLogFiles();
}

module.exports = ListLogs;
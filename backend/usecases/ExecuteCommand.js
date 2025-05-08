

const { v4: uuidv4 } = require('uuid');
const LogEntry = require('../domain/models/LogEntry');
const { executeShellCommand, writeLogFile } = require('../infrastructure/processManager');

async function ExecuteCommand(command) {
  const { stdout, stderr, error } = await executeShellCommand(command);
  const logEntry = new LogEntry(command, stdout, error, stderr);

  const filename = `${uuidv4()}.log`;
  await writeLogFile(filename, logEntry);
  return { filename, logEntry };
}

module.exports = ExecuteCommand;

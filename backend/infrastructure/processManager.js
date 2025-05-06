const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir);

function executeShellCommand(command) {
  return new Promise((resolve) => {
    exec(command, (error, stdout, stderr) => {
      resolve({ error, stdout, stderr });
    });
  });
}

function writeLogFile(filename, logEntry) {
  const fullPath = path.join(logsDir, filename);
  return fs.promises.writeFile(fullPath, JSON.stringify(logEntry, null, 2));
}

function readLogFile(filename) {
  const fullPath = path.join(logsDir, filename);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, 'utf-8');
}

function deleteLogFile(filename) {
  const fullPath = path.join(logsDir, filename);
  if (!fs.existsSync(fullPath)) return false;
  fs.unlinkSync(fullPath);
  return true;
}

function listLogFiles() {
  return fs.readdirSync(logsDir).filter(f => f.endsWith('.log'));
}

module.exports = {
  executeShellCommand,
  writeLogFile,
  readLogFile,
  deleteLogFile,
  listLogFiles
};
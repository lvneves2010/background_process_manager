const ExecuteCommand = require('../usecases/ExecuteCommand');
const ListLogs = require('../usecases/ListLogs');
const DeleteLog = require('../usecases/DeleteLog');
const { readLogFile } = require('../infrastructure/processManager');

const runCommand = async (req, res) => {
  const { command } = req.body;
  if (!command) return res.status(400).json({ error: 'No command provided' });

  try {
    const { filename } = await ExecuteCommand(command);
    res.status(200).json({ message: 'Command executed', logFile: filename });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getLogList = (req, res) => {
  try {
    const files = ListLogs();
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getLogFile = (req, res) => {
  const { filename } = req.params;
  if (!filename) return res.status(400).json({ error: 'No filename provided' });

  try {
    const content = readLogFile(filename);
    if (!content) return res.status(404).json({ error: 'Log file not found' });
    res.status(200).send(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteLogFile = (req, res) => {
  const { filename } = req.params;
  if (!filename) return res.status(400).json({ error: 'No filename provided' });

  try {
    const success = DeleteLog(filename);
    if (!success) return res.status(404).json({ error: 'Log file not found' });
    res.status(200).json({ message: 'Log file deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  runCommand,
  getLogList,
  getLogFile,
  deleteLogFile
};

import axios from 'axios';

export const executeCommand = async (command) => {
  const res = await axios.post('/api/process', { command });
  return res.data; // { message, logFile }
};

export const fetchLogContent = async (filename) => {
  const res = await axios.get(`/api/process/logs/${filename}`);
  return res.data; // Log file content as plain text
};

export const fetchLogList = async () => {
  const res = await axios.get('/api/process/logList');
  return res.data; // Array of log file names
};

export const deleteLogFile = async (filename) => {
  const res = await axios.delete(`/api/process/logs/${filename}`);
  return res.data;
};

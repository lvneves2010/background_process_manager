import React, { useState, useEffect } from 'react';
import CommandInput from '../components/CommandInput';
import LogDisplay from '../components/LogDisplay';
import LogFileList from '../components/LogFileList';
import {
  executeCommand,
  fetchLogContent,
  fetchLogList,
  deleteLogFile,
} from '../services/api';

export default function Home() {
  const [command, setCommand] = useState('');
  const [log, setLog] = useState('');
  const [logFiles, setLogFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadLogList = async () => {
    try {
      const logs = await fetchLogList();
      setLogFiles(logs);
    } catch (err) {
      setLog(`Error: ${err.message}`);
    }
  };

  const handleCommandSubmit = async () => {
    try {
      setLoading(true);
      setLog('');
      const { logFile } = await executeCommand(command);
      const content = await fetchLogContent(logFile);
      setLog(content);
      await loadLogList();
    } catch (err) {
      setLog(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (filename) => {
    try {
      setLoading(true);
      await deleteLogFile(filename);
      await loadLogList();
      setLog('');
    } catch (err) {
      setLog(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

 const handleOneLogFetch = async (filename) => {
    try {
      setLoading(true);
      const content = await fetchLogContent(filename);
      setLog(content);
    } catch (err) {
      setLog(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  } 

  useEffect(() => {
    loadLogList();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4\">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md\">
        <h1 className="text-xl font-bold mb-4\">Run Shell Command</h1>
        <CommandInput
          command={command}
          onCommandChange={setCommand}
          onSubmit={handleCommandSubmit}
          loading={loading}
        />
        <LogDisplay log={log} />
        <LogFileList files={logFiles} onDelete={handleDelete} onOneLogFetch={handleOneLogFetch} loading={loading} />
      </div>
    </div>
  );
}

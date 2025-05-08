import React from 'react';

export default function LogDisplay({ log }) {
  if (!log) return <pre className="bg-gray-800 text-white p-4 mt-4 rounded h-64">No log output yet</pre>;

  const { command, output, error, stderr, timestamp } = log;

  return (
    <pre className="bg-gray-800 text-white p-4 mt-4 rounded h-64 overflow-y-auto whitespace-pre-wrap">
{`> Command: ${command}
> Timestamp: ${new Date(timestamp).toLocaleString()}

Output:
${output || '(no output)'}

Error:
${error || '(no error)'}

Stderr:
${stderr || '(no stderr)'}`}
    </pre>
  );
}

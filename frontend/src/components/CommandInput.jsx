import React from 'react';

export default function CommandInput({ command, onCommandChange, onSubmit, loading }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={command}
        onChange={(e) => onCommandChange(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        placeholder="Enter shell command (e.g., ls -la)"
      />
      <button
        onClick={onSubmit}
        disabled={loading || !command}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Running...' : 'Run Command'}
      </button>
    </div>
  );
}

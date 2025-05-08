import React from 'react';

export default function LogFileList({ files, onDelete, onOneLogFetch, loading }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Log Files</h2>
      {files.length === 0 ? (
        <p className="text-gray-500">No log files found.</p>
      ) : (
        <ul className="space-y-2">
          {files.map((file) => (
            <li key={file} className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded">
              <span className="truncate">{file}</span>
              <button
                onClick={() => onDelete(file)}
                disabled={loading}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 disabled:opacity-50"
              >
                {loading ? '...' : 'Delete'}
              </button>

              -- 
              <button
                onClick={() =>onOneLogFetch(file)}
                disabled={loading}
              >
                {loading ? 'Running...' : 'Show'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

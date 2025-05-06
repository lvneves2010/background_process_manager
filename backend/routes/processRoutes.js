const express = require('express');
const router = express.Router();
const {
  runCommand,
  getLogList,
  getLogFile,
  deleteLogFile
} = require('../adapters/processController');

router.post('/process', runCommand);
router.get('/process/logList', getLogList);
router.get('/process/logs/:filename', getLogFile);
router.delete('/process/logs/:filename', deleteLogFile);

module.exports = router;
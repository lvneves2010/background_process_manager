class LogEntry {
    constructor(command, output, error, stderr) {
        this.command = command;
        this.output = output;
        this.error = error;
        this.stderr = stderr;
        this.timestamp = new Date();
    }
}
  
module.exports = LogEntry;
  
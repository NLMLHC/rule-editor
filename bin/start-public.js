const hostName = require('os').hostname();
const { spawn } = require('child_process');

const ngArgs = ['serve', '--host', hostName];
if (process.argv[2] && process.argv[2] === '--dist') {
  ngArgs.push('--configuration');
  ngArgs.push('production');
}
spawn('ng', ngArgs, {
  stdio: 'inherit'
});

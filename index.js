const createWaveFile = require('./createWaveFile');
const dtmfPreset = require('./dtmfPreset');

function main() {
  const data = Array.from(`----------${(process.argv[2] ?? '0').replace(/\d/g, v => `${v}.`)}.........`).map(r => dtmfPreset[r]).flat();
  process.stdout.write(
    createWaveFile(data)
  );
}

main();

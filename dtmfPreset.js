const {
  sineWave, mixingWaves,
} = require('./wave');

const dtmfPreset = {
  '1': mixingWaves(sineWave(697,0.1,44100), sineWave(1209,0.1,44100)),
  '2': mixingWaves(sineWave(697,0.1,44100), sineWave(1336,0.1,44100)),
  '3': mixingWaves(sineWave(697,0.1,44100), sineWave(1447,0.1,44100)),
  '4': mixingWaves(sineWave(770,0.1,44100), sineWave(1209,0.1,44100)),
  '5': mixingWaves(sineWave(770,0.1,44100), sineWave(1336,0.1,44100)),
  '6': mixingWaves(sineWave(770,0.1,44100), sineWave(1447,0.1,44100)),
  '7': mixingWaves(sineWave(852,0.1,44100), sineWave(1209,0.1,44100)),
  '8': mixingWaves(sineWave(852,0.1,44100), sineWave(1336,0.1,44100)),
  '9': mixingWaves(sineWave(852,0.1,44100), sineWave(1447,0.1,44100)),
  '*': mixingWaves(sineWave(941,0.1,44100), sineWave(1209,0.1,44100)),
  '0': mixingWaves(sineWave(941,0.1,44100), sineWave(1336,0.1,44100)),
  '#': mixingWaves(sineWave(941,0.1,44100), sineWave(1447,0.1,44100)),

  '-': mixingWaves(sineWave(350,0.1,44100), sineWave(440,0.1,44100)),
  '.': sineWave(0,0.1,44100),
  '~': mixingWaves(sineWave(440,1,44100), sineWave(480,1,44100)),
  '/': [mixingWaves(sineWave(480,0.5,44100), sineWave(620,0.5,44100)),sineWave(0,0.5,44100),].flat(),
  '!': [mixingWaves(sineWave(1400,0.1,44100), sineWave(2060,0.1,44100), sineWave(2450,0.1,44100), sineWave(2600,0.1,44100)),sineWave(0,0.1,44100),].flat(),
};
module.exports = dtmfPreset;

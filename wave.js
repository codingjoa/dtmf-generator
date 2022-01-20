function sineWave(frequency, second, rate) {
  const onelen = Math.floor(second * rate);
  const A = 2 * Math.PI * frequency / rate;
  const R = [];
  for(let i=0; i<onelen; i++) {
    R[i] = 128+Math.round(127*Math.sin(i*A));
  }
  return R;
}

function mixingWaves(...channels) {
  const chlen = channels?.length ?? 0;
  const len = channels[0]?.length ?? 0;
  const R = [];
  for(let i=0; i<len; i++) {
    R[i] = 0;
    for(let j=0; j<chlen; j++) {
      R[i] += channels[j][i];
    }
    R[i] /= chlen;
  }
  return R;
}

function concatFrames(...frames) {
  return frames.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
}

module.exports = {
  sineWave, mixingWaves, concatFrames
};

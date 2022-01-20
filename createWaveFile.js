function LE32(number) {
  const buf = Buffer.alloc(4)
  buf.writeUInt32LE(number, 0);
  return Array.from(buf.values());
}

function LE16(number) {
  const buf = Buffer.alloc(2)
  buf.writeUInt16LE(number, 0);
  return Array.from(buf.values());
}

function RIFF(data) {
  const chunkID = [0x52, 0x49, 0x46, 0x46]; // [RIFF]
  const WAVE = [0x57, 0x41, 0x56, 0x45]; // [WAVE]
  const chunkSize = LE32(data.length + 36); // Little-Endian, File Size - 4B[RIFF] - 4B[chunkSize]
  return [
    ...chunkID,
    ...chunkSize,
    ...WAVE,
  ];
}

function FMT() {
  const chunkID = [0x66, 0x6d, 0x74, 0x20]; // [fmt%20]
  const chunkSize = [0x10, 0x00, 0x00, 0x00]; // Little-Endian, FMT Chunk 크기는 항상 16
  const AudioFormat = [0x01, 0x00]; // PCM = 1
  const Channels = [0x01, 0x00]; // Mono
  const BitsPerSample = [0x08, 0x00];
  const BlockAlign = LE16(BitsPerSample[0] * Channels[0] / 0x08);
  const SampleRate = LE32(44100);
  const ByteRate = LE32(SampleRate * BlockAlign);
  return [
    ...chunkID,
    ...chunkSize,
    ...AudioFormat,
    ...Channels,
    ...SampleRate,
    ...ByteRate,
    ...BlockAlign,
    ...BitsPerSample,
  ];
}

function DATA(data) {
  const chunkID = [0x64, 0x61, 0x74, 0x61];
  const chunkSize = LE32(data.length);
  return [
    ...chunkID,
    ...chunkSize,
    ...data,
  ];
}

function createWaveFile(bufferArray) {
  return Buffer.from([
    ...RIFF(bufferArray),
    ...FMT(),
    ...DATA(bufferArray),
    ...bufferArray
  ]);
}
module.exports = createWaveFile;

# dtmf-generator

Node.js로 [DTMF](https://en.wikipedia.org/wiki/Dual-tone_multi-frequency_signaling)(Dual Tone Multiple Frequency/전화기) 소리를 만들어 보아요.

## 예시

### wav 파일로 저장

```bash
node . 15702340003 > 15702340003.wav
```

### mp3 파일로 저장

```bash
node . 15702340003 | ffmpeg -i pipe:0 -f mp3 15702340003.mp3
```

/* eslint-disable no-param-reassign */
const createAnalyser = (sourceNode, canvasCtx) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  analyser.smoothingTimeConstant = 0.85;

  const source = audioContext.createMediaElementSource(sourceNode);
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 256;

  const bufferLength = analyser.frequencyBinCount;
  const buffer = new Uint8Array(bufferLength);

  const draw = () => {
    requestAnimationFrame(draw);

    analyser.getByteFrequencyData(buffer);
    for (let i = 0; i < bufferLength; i += 1) {
      const barHeight = buffer[i];

      canvasCtx.fillStyle = 'red';
      canvasCtx.fillRect(5, 150, 20, -barHeight / 2);
      setTimeout(() => {
        canvasCtx.clearRect(0, 0, 30, 150);
      });
    }
  };

  draw();

  return audioContext;
};

export default createAnalyser;

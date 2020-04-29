import { BUTTON_ID } from './config';
import createAnalyser from './analyser';

/* eslint-disable no-param-reassign */
const initControllers = (state) => {
  const canvas = document.querySelector('.visualizer');
  const canvasCtx = canvas.getContext('2d');
  const videos = [...document.querySelectorAll('video')];
  const audioContexts = videos.reduce((acc, video) => {
    const id = video.getAttribute('id');

    return {
      ...acc,
      [id]: createAnalyser(video, canvasCtx),
    };
  }, {});

  let currentContext;
  const buttonToClose = document.getElementById(BUTTON_ID);
  const filtersControls = [...document.querySelectorAll('.control')];
  filtersControls.forEach((control) => {
    control.addEventListener('input', function onChange(evt) {
      const { target: { value } } = evt;
      const id = this.getAttribute('id');
      state.filters[id] = value;
    });
  });

  videos.forEach((video) => {
    video.addEventListener('click', function onClick() {
      const id = this.getAttribute('id');
      state.fullScreen = id;
      currentContext = audioContexts[id];
      currentContext.resume();
    });
  });

  buttonToClose.addEventListener('click', () => {
    state.fullScreen = null;
  });
};

export default initControllers;

/* eslint-disable no-param-reassign */
import {
  FORM_ID,
  CONTROLS,
} from './config';

export const renderFullScreen = (state) => {
  const form = document.getElementById(FORM_ID);
  const filtersControls = document.querySelectorAll('.control');
  const visualizer = document.querySelector('.visualizer');

  if (state.fullScreen) {
    const video = document.getElementById(state.fullScreen);
    video.classList.add('fullScreen');
    video.parentNode.classList.add('onTop');
    video.muted = false;
    form.classList.remove('hidden');
    visualizer.classList.remove('hidden');

    return;
  }

  const videos = document.querySelectorAll('video');

  [...videos].forEach((video) => {
    if (video.classList.contains('fullScreen')) {
      video.classList.remove('fullScreen');
      setTimeout(() => {
        video.parentNode.classList.remove('onTop');
      }, 500);
      video.muted = true;

      const cssFilter = CONTROLS
        .map(({ filterType, defaultValue, unit }) => `${filterType}(${defaultValue}${unit})`)
        .join(' ');
      video.style.filter = cssFilter;
    }
  });

  [...filtersControls].forEach((control) => {
    const id = control.getAttribute('id');
    const { defaultValue } = CONTROLS.find(({ filterType }) => filterType === id);
    control.setAttribute('value', defaultValue);
  });

  form.classList.add('hidden');
  visualizer.classList.add('hidden');
};

export const renderFilterEffect = (state) => {
  const video = document.getElementById(state.fullScreen);
  const cssFilters = Object.entries(state.filters)
    .map(([filter, value]) => {
      const { unit } = CONTROLS.find(({ filterType }) => filter === filterType);
      return `${filter}(${value}${unit})`;
    })
    .join(' ');
  video.style.filter = cssFilters;
};

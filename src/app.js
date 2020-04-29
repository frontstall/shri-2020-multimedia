import {
  FORM_ID,
  CONTROLS,
  BUTTON_ID,
} from './config';
import { renderFullScreen, renderFilterEffect } from './render';
import initState from './state';
import initControllers from './controllers';

const watch = require('on-change');

const createControl = ({
  min,
  max,
  step,
  defaultValue,
  filterType,
}) => {
  const rangeInput = document.createElement('input');
  rangeInput.setAttribute('type', 'range');
  rangeInput.setAttribute('min', min);
  rangeInput.setAttribute('max', max);
  rangeInput.setAttribute('step', step);
  rangeInput.setAttribute('value', defaultValue);
  rangeInput.setAttribute('id', filterType);
  rangeInput.classList.add('control');

  const label = document.createElement('label');
  label.classList.add('label');
  label.textContent = filterType;
  label.appendChild(rangeInput);

  return label;
};

const createControls = () => {
  const form = document.createElement('form');
  form.setAttribute('id', FORM_ID);
  form.classList.add('hidden');
  const controls = CONTROLS.map(createControl);
  controls.forEach((control) => {
    form.appendChild(control);
  });

  const button = document.createElement('input');
  button.setAttribute('type', 'reset');
  button.setAttribute('id', BUTTON_ID);
  button.setAttribute('value', 'Close');
  form.appendChild(button);

  return form;
};

const app = () => {
  const controls = createControls();
  document.body.appendChild(controls);

  const state = initState();
  const watchedState = watch(state, function onChange(path) {
    if (path === 'fullScreen') {
      renderFullScreen(this);
    } else {
      renderFilterEffect(this);
    }
  });
  initControllers(watchedState);
};

export default app;

export const FORM_ID = 'form';
export const BUTTON_ID = 'buttonClose';
export const BRIGHTNESS = 'brightness';
export const CONTRAST = 'contrast';

export const CONTROLS = [
  {
    min: 0,
    max: 200,
    defaultValue: 100,
    step: 1,
    filterType: BRIGHTNESS,
    unit: '%',
  },
  {
    min: 0,
    max: 200,
    defaultValue: 100,
    step: 1,
    filterType: CONTRAST,
    unit: '%',
  },
];

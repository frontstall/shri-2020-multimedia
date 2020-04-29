import { BRIGHTNESS, CONTRAST } from './config';

const initState = () => ({
  fullScreen: null,
  filters: {
    [BRIGHTNESS]: 100,
    [CONTRAST]: 100,
  },
});

export default initState;

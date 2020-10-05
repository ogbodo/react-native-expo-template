import { atom } from 'recoil';

import { SCREEN_GRID_SIZE_STATE_KEY } from '../../../constants';
import { ScreenGridStateInterface } from '../types';

export const gridInitialState: ScreenGridStateInterface = {
  cardSize: 320,
  numOfColumn: 1
};

export const screenGridSizeState = atom({
  key: SCREEN_GRID_SIZE_STATE_KEY,
  default: gridInitialState
});

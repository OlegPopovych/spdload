import { atom } from 'recoil';
import { Tour } from '../types/types';

export const favoriteState = atom<Tour[]>({
  key: 'favoriteState',
  default: [],
});
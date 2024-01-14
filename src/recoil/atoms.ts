import { atom } from 'recoil';
import { Rocket } from '../types/types';

export const favoriteState = atom<Rocket[]>({
  key: 'favoriteState',
  default: [],
});
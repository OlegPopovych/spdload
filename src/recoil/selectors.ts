import { selector } from 'recoil';
import { favoriteState } from './atoms';

export const favoritePageState = selector({
  key: 'favoritePageState', 
  get: ({get}) => {
    const favorites = get(favoriteState);

    return favorites;
  },
});
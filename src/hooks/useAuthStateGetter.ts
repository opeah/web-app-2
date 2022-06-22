import { useRecoilValue } from 'recoil';

import { authState } from '../state';

export const useAuthStateGetter = () => {
  return useRecoilValue(authState);
};

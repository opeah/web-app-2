import { useSetRecoilState } from 'recoil';

import { authState } from '../state';

export const useAuthStateSetter = () => {
  return useSetRecoilState(authState);
};

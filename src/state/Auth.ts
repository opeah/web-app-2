import { atom } from 'recoil';

import { _User } from '../domain/entities';

export interface AuthState {
  user: _User;
  permissions: string[];
}

export const authState = atom<AuthState>({
  key: 'AuthState',
  default: {
    user: {
      email: '',
    },
    permissions: [],
  },
});

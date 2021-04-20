import { UserState } from './types';


function state(): UserState {
  return {
    user: null,
    prefetch: false,
  };
}

export default state;

import { useContext } from 'react';

import { AuthContext } from '@contexts/Authcontext';

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
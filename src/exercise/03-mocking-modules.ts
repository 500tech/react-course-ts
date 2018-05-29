import { getCurrentUser } from './external-api';

export function isCurrentUserAdmin(): boolean {
  const user = getCurrentUser();

  return user.isAdmin;
}

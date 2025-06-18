import React from 'react';
import { useAuth } from '../AuthProvider';

export const UserProfile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.displayName || 'User'}</h2>
      <p>{user.email}</p>
    </div>
  );
};

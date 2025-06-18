import React from 'react';
import { View } from 'react-native';
import { AuthProvider } from '../../shared/AuthProvider';
import { UserProfile } from '../../shared/components/UserProfile';

export default function ProfileScreen() {
  return (
    <AuthProvider>
      <View>
        <UserProfile />
      </View>
    </AuthProvider>
  );
}

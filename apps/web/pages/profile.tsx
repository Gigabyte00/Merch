import { AuthProvider } from '../../shared/AuthProvider';
import { UserProfile } from '../../shared/components/UserProfile';

export default function ProfilePage() {
  return (
    <AuthProvider>
      <UserProfile />
    </AuthProvider>
  );
}

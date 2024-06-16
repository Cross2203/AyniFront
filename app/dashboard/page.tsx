'use client';
import { useAuth } from '@/app/context/authcontext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AuthProvider } from '@/app/context/authcontext';

export default function Page() {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.push('');
    }
  }, [user, loading, router]);

  return <p>Dashboard Page</p>;

}
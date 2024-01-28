'use client';

import React, { useMemo } from 'react';
import Forms from './Forms';
import { useSearchParams } from 'next/navigation';
import Users from './Users';
import Ads from './Ads';
import { get } from '@/utils/storage';

function AdminPanel() {
  React.useEffect(() => {
    document.title = 'Admin Panel';
  }, []);
  const searchParams = useSearchParams();

  const page = searchParams.get('page');
  const user = useMemo(() => {
    return get('user');
  }, []);

  console.log(user);

  if (!user?.isAdmin) {
    return 'You are not admin';
  }

  if (page === 'users') {
    return <Users />;
  }

  if (page === 'ads') {
    return <Ads />;
  }

  return <Forms />;
}

export default AdminPanel;

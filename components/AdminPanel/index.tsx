'use client';

import React from 'react';
import Forms from './Forms';
import { useSearchParams } from 'next/navigation';
import Users from './Users';
import Ads from './Ads';

function AdminPanel() {
  const searchParams = useSearchParams();

  const page = searchParams.get('page');

  if (page === 'users') {
    return <Users />;
  }

  if (page === 'ads') {
    return <Ads />;
  }

  return <Forms />;
}

export default AdminPanel;

'use client';

import React from 'react';
import Forms from './Forms';
import { useSearchParams } from 'next/navigation';
import Users from './Users';

function AdminPanel() {
  const searchParams = useSearchParams();

  const page = searchParams.get('page');

  if (page === 'users') {
    return <Users />;
  }

  return <Forms />;
}

export default AdminPanel;

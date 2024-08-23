
'use client';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from './store';
import { useRef } from 'react';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}

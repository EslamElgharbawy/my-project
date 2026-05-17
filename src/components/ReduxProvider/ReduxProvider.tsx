"use client"
import { Store } from '@/Store/Store';
import React from 'react'
import { Provider } from 'react-redux';
export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={Store} >
      {children}
    </Provider>
  )
}

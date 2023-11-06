// File written by Arif Nizami
"use client";

import { SessionProvider } from 'next-auth/react';


const Provider = ({ children, session }: any | null) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider
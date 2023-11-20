// File written by Arif Nizami

"use client";

import React from 'react'
import { useSession } from 'next-auth/react';

const MainMenu = () => {
  const { data: session } = useSession();

  return (
    <div>
      <p className="desc text-center">
        {session ? `Welcome, ${session.user?.name}! Select what you would like to do today from the navigation bar.
        You can click on your profile icon to view your employee information.
        If you are on a mobile device, tap the profile icon to open the navigation dropdown.` : 'Welcome! Please sign in to access the system.'}
      </p>
    </div>
    
  )
}

export default MainMenu
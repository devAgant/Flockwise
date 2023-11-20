// File written by Elijah Simmons
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import ViewPayStubs from './view-paystubs';
import Paystub from '@models/paystub';
import EmployeeInfo from './employee-info';

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div className="profile p-5 border rounded shadow w-full max-w-2xl mx-auto">
      <EmployeeInfo />
      <ViewPayStubs />
    </div>
  );
};

export default Profile;
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Profile = () => {
  const [selectedPaystub, setSelectedPaystub] = useState<number | null>(null);
  const { data: session } = useSession();

  // TODO - store this information in the database and retrieve it 
  const paystubs = [
    {
      month: 'September 2023',
      amount: 5000,
      details: 'Details for September 2023 paystub...',
    },
    {
      month: 'October 2023',
      amount: 5000,
      details: 'Details for October 2023 paystub...',
    },
    {
      month: 'November 2023',
      amount: 5000,
      details: 'Details for November 2023 paystub...',
    },
    {
      month: 'December 2023',
      amount: 5000,
      details: 'Details for December 2023 paystub...',
    },

  ];

  const handlePaystubSelect = (index: number) => {
    setSelectedPaystub(index);
  };

  return (
    <div className="profile p-5 border rounded shadow w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold mr-2">{session?.user?.name}</h1>
          <Link href="/profile">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src={session?.user?.image ?? '/default-image-path.jpg'}
                  alt="profile"
                  width={57}
                  height={57}
                  className="rounded-full cursor-pointer"
                />
              </div>
              
            </div>
          </Link>
      </div>
      <p className="text-gray-600 mb-4">add info here...</p>


      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Paystubs</h2>
        <div className="max-h-60 overflow-y-auto border rounded border-gray-300 p-4">
          <ul className="divide-y">
            {paystubs.map((paystub, index) => (
              <div
                key={index}
                onClick={() => handlePaystubSelect(index)}
                className={`flex justify-between p-2 cursor-pointer relative ${selectedPaystub === index ? 'blue_gradient ' : ''}`}
              >
                <div>
                  <div className="mr-2">{paystub.month}</div>
                </div>
                <div className="text-right">${paystub.amount}</div>
              </div>
            ))}
          </ul>
        </div>
        {selectedPaystub !== null && (
          <div>
            <h3 className="text-xl font-bold mt-4 mb-2">
              Details for {paystubs[selectedPaystub].month}
            </h3>
            <p>{paystubs[selectedPaystub].details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
//Made by Elijah Simmons
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EditProfile from './edit-profile';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { viewPayStubs, exportPayStub } from './payroll';

const Profile = () => {
  const [selectedPaystub, setSelectedPaystub] = useState<number | null>(null);
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);

  // This will have to be changed to be synced with the database and the user's 
  // current session, but I'm not gonna do that right now
  const [userInfo, setUserInfo] = useState({
    email: 'email@email.com',
    phone: '(123) 456-7890',
    address: '1234 House ln',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (updatedUserInfo: { email: string; phone: string, address: string }) => {
    setIsEditing(false);
    setUserInfo(updatedUserInfo);
    // TODO : Update user information in the database
    // ALSO TODO : do this a better way!
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const paystubs = viewPayStubs();

  const handlePaystubSelect = (index: number) => {
    setSelectedPaystub(index);
  };

  return (
    <div className="profile p-5 border rounded shadow w-full max-w-2xl mx-auto">
      {isEditing ? ([
        <h1 className="text-2xl font-bold mb-4">{session?.user?.name}</h1>,
        <EditProfile userInfo={userInfo} onSave={handleSaveClick} onCancel={handleCancelClick} />
      ]) : (
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold mr-2">{session?.user?.name}</h1>
            <button onClick={handleEditClick} className="outline_btn">
              Edit
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Email: {userInfo.email}
          </p>
          <p className="text-gray-600 mb-4">
            Phone Number: {userInfo.phone}
          </p>
          <p className="text-gray-600 mb-4">
            Address: {userInfo.address}
          </p>
        </div>
      )}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Paystubs</h2>
        <div className="max-h-60 overflow-y-auto border rounded border-gray-300 p-4 mb-5">
          <ul className="divide-y">
            {paystubs.map((paystub, index) => (
              <div
                key={index}
                onClick={() => handlePaystubSelect(index)}
                className={`flex justify-between p-2 cursor-pointer relative ${selectedPaystub === index ? 'blue_gradient ' : ''}`}
              >
                <div>
                  <div className="mr-2">{paystub.month} - ${paystub.amount}</div>
                </div>
                <div className="text-right">
                  <button onClick={() => handlePaystubSelect(index)} className="outline_btn">
                    Select
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
        {selectedPaystub !== null && (
          <div>
            <div className="flex justify-between">
              <h3 className="text-xl font-bold mt-4 mb-2">
                Details for {paystubs[selectedPaystub].month}
              </h3>
              <button onClick={() => exportPayStub()} className="outline_btn m-2">
                Export
              </button>
            </div>
            <p><strong>Employee Name:</strong> John Doe</p>
            <p><strong>Employee ID:</strong> 12345</p>
            <p><strong>Pay Period:</strong> Month 2023</p>
            <p><strong>Hours Worked:</strong> 160</p>
            <p><strong>Hourly Rate:</strong> $30.00</p>
            <p><strong>Gross Pay:</strong> $4800.00</p>
            <p><strong>Deductions:</strong> $800.00</p>
            <p><strong>Net Pay:</strong> $4000.00</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
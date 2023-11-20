// Written by Elijah Simmons

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SessionManager from '@models/sessionManager';
import { useSession } from 'next-auth/react';

const EmployeeInfo = () => {
    const { data: session } = useSession();

    useEffect(() => {
        SessionManager.setSession(session);
    }, [session]);

    const userEmployee = session?.user?.employee;

    return (
        <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold mr-2">{session?.user?.name}</h1>
                <Image
                    src={session?.user?.image ?? '/default-image-path.jpg'}
                    alt="profile"
                    width={37}
                    height={37}
                    className="rounded-full"
                />
            </div>
            <p className="text-gray-600 mb-4">
                Employee ID: {userEmployee?.employeeID}
            </p>
            <p className="text-gray-600 mb-4">
                Email: {session?.user?.email}
            </p>
            <p className="text-gray-600 mb-4">
                Salary: ${userEmployee?.salary} / hour
            </p>
        </div>
    );
};

export default EmployeeInfo;
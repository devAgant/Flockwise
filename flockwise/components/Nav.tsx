// File written by Arif Nizami
"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();
  const handleSignOut = async () => {
    await signOut();
    // You can perform additional actions after signing out, if needed
  };

  const [providers, setProviders] = useState<{ [key: string]: any } | null>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    push('/');
    const fetchProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    fetchProviders();
  }, [])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/Flockwise.png"
          alt="Flockwise Logo"
          width={55}
          height={55}
          className="object-contain"
        />
        <p className="logo_text">Flockwise</p>
      </Link>
      <div className="lg:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <ul>
              <li>
                <Link
                  href="/task-manager"
                  className='dropdown_link'
                >
                  Tasks
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="/work-schedule"
                  className='dropdown_link'
                >
                  Work Schedule
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="/onboarding"
                  className='dropdown_link'
                >
                  Onboarding
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="/benefits-manager"
                  className='dropdown_link'
                >
                  Benefits
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="/hr-portal"
                  className='dropdown_link'
                >
                  HR Portal
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="/management-portal"
                  className='dropdown_link'
                >
                  Management Portal
                </Link>
              </li>
            </ul>
              <button type="button" onClick={() => {
                signOut();
  
              }} className="outline_btn">
                Sign Out
              </button>



            <Link href="/profile">
              <Image
                src={session?.user.image ?? '/default-image-path.jpg'}
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>

          </div>

        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              ))}
          </>
        )}



      </div>

      {/*Mobile Navigation */}
      <div className="lg:hidden flex relative">
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image ?? '/default-image-path.jpg'}
              alt="Navigation"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/employment-history"
                  className='dropdown_link'
                  onClick={() => setToggleDropdown
                    (false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/task-manager"
                  className='dropdown_link'
                  onClick={() => setToggleDropdown
                    (false)}
                >
                  Tasks
                </Link>
                <Link
                  href="/work-schedule"
                  className='dropdown_link'
                  onClick={() => setToggleDropdown
                    (false)}
                >
                  Work Schedule
                </Link>
                <Link
                  href="/onboarding"
                  className='dropdown_link'
                  onClick={() => setToggleDropdown
                    (false)}
                >
                  Onboarding
                </Link>
                <Link
                  href="/benefits-manager"
                  className='dropdown_link'
                  onClick={() => setToggleDropdown
                    (false)}
                >
                  Benefits
                </Link>
                <Link
                  href="/hr-portal"
                  className='dropdown_link'
                  onClick={() => setToggleDropdown
                    (false)}
                >
                  HR Portal
                </Link>
                <Link
                  href="/management-portal"
                  className='dropdown_link'
                  onClick={() => setToggleDropdown
                    (false)}
                >
                  Management Portal
                </Link>
                <ul>
              <li>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className="mt-5 w-full black_btn">
                    Sign Out
                  </button>
                </li>
                </ul>
                
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav;
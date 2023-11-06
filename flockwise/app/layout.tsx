// File written by Arif Nizami

import '@styles/globals.css';
import Nav from '@components/Nav';
import React, { ReactNode } from 'react';
import Provider from '@components/Provider';

export const metadata = {
    title: "Flockwise",
    description: 'A Unique Employee Management System'
}


const RootLayout = ({ children }: any | null) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout
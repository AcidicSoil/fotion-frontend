import React from 'react';
import Link from 'next/link';

// Header Component
// This component will be used across the application to display the top navigation bar
const Header = () => {
    return (
        <header className="header">
            <nav>
                <Link href="/dashboard">
                    <a className="logo">Fotion</a>
                </Link>
                {/* Navigation Links - Add more if needed */}
                <Link href="/notebook">
                    <a>Notebooks</a>
                </Link>
                <Link href="/tasks">
                    <a>Tasks</a>
                </Link>
            </nav>
            <style jsx>{`
                .header {
                    background-color: #333;
                    color: white;
                    padding: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-weight: bold;
                    font-size: 1.5rem;
                }
                nav a {
                    color: white;
                    text-decoration: none;
                    margin-left: 1rem;
                }
            `}</style>
        </header>
    );
};

export default Header;

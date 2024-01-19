import React from 'react';

// Footer Component
// This component will be used across the application to display the bottom footer bar
const Footer = () => {
    return (
        <footer className="footer">
            <div>
                © {new Date().getFullYear()} Fotion. All rights reserved.
            </div>
            <style jsx>{`
                .footer {
                    background-color: #333;
                    color: white;
                    padding: 1rem;
                    text-align: center;
                }
            `}</style>
        </footer>
    );
};

export default Footer;

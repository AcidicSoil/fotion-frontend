import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Layout Component
// This component will wrap the content of each page and include the Header and Footer
const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
            <style jsx global>{`
                body {
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                main {
                    min-height: 80vh; // Adjust the height based on header and footer size
                    padding: 1rem;
                }
            `}</style>
        </div>
    );
};

export default Layout;

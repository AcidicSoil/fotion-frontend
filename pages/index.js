import React from 'react';
import Layout from '../components/layout';

const Home = () => {
    return (
        <Layout>
            <div className="home">
                <h1>Welcome to Fotion</h1>
                <p>Your Notion clone to organize work and life.</p>
                {/* Further implementation here */}
            </div>
            <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 80vh;
        }
        h1 {
          margin-bottom: 0.5rem;
        }
        p {
          color: #555;
        }
      `}</style>
        </Layout>
    );
};

export default Home;

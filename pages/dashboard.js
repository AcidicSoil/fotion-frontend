import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NoteCard from '../components/NoteCard';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Sidebar />
                <div className="notes-section">
                    {/* Example NoteCard - This will be dynamic later */}
                    <NoteCard title="Example Note" content="This is an example note card." />
                </div>
            </div>
            <style jsx>{`
                .content {
                    display: flex;
                }
                .notes-section {
                    flex-grow: 1;
                }
            `}</style>
        </div>
    );
};

export default Dashboard;

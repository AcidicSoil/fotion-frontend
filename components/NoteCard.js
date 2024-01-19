import React from 'react';

// NoteCard Component
// This component will display an individual note card
const NoteCard = ({ title, content }) => {
    return (
        <div className="note-card">
            <h3>{title}</h3>
            <p>{content}</p>
            <style jsx>{`
                .note-card {
                    border: 1px solid #ccc;
                    padding: 20px;
                    margin: 20px;
                    border-radius: 8px;
                }
            `}</style>
        </div>
    );
};

export default NoteCard;

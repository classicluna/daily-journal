import React from 'react';
import './JournalList.css';

const JournalList = ({ entries, editEntry, deleteEntry }) => {
  return (
    <div className='journal-list'>
      {entries.map((entry) => (
        <div key={entry.id} className='journal-item'>
          <p>Date: {entry.date}</p>
          <p>{entry.content}</p>
          <button onClick={() => editEntry(entry.id)} className='edit-button'>
            Edit
          </button>
          <button
            onClick={() => deleteEntry(entry.id)}
            className='delete-button'
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default JournalList;

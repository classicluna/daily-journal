import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './JournalForm.css';

const JournalForm = ({ addEntry, editingEntry, saveEditedEntry }) => {
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingEntry) {
      setDate(editingEntry.date);
      setContent(editingEntry.content);
    }
  }, [editingEntry]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !content) return;

    if (editingEntry) {
      saveEditedEntry({
        ...editingEntry,
        date,
        content,
      });
    } else {
      const newEntry = {
        id: uuidv4(),
        date,
        content,
      };
      addEntry(newEntry);
    }

    setDate('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className='journal-form'>
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className='input-field'
      />
      <textarea
        placeholder='Write your entry here...'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className='textarea-field'
        rows={8}
      />
      <button type='submit' className='submit-button'>
        {editingEntry ? 'Save Changes' : 'Add Entry'}
      </button>
    </form>
  );
};

export default JournalForm;

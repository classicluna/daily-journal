import './App.css';
import React, { useState } from 'react';
import JournalForm from './components/JournalForm';
import JournalList from './components/JournalList';

function App() {
  const [entries, setEntries] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
    setEditingEntry(null);
  };

  const editEntry = (id) => {
    const entryToEdit = entries.find((entry) => entry.id === id);
    if (entryToEdit) {
      setEditingEntry(entryToEdit);
    }
  };

  const saveEditedEntry = (editedEntry) => {
    setEntries(
      entries.map((entry) =>
        entry.id === editedEntry.id ? editedEntry : entry
      )
    );
    setEditingEntry(null);
  };

  return (
    <div className='app-container'>
      <h1>Daily Journal</h1>
      <JournalForm
        addEntry={addEntry}
        editingEntry={editingEntry}
        saveEditedEntry={saveEditedEntry}
      />
      <JournalList
        entries={entries}
        editEntry={editEntry}
        deleteEntry={deleteEntry}
      />
    </div>
  );
}

export default App;

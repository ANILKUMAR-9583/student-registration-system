import React, { useState } from 'react';

function CourseTypeManager({ courseTypes, setCourseTypes }) {
  const [newType, setNewType] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (newType.trim() && !courseTypes.includes(newType)) {
      setCourseTypes([...courseTypes, newType]);
      setNewType('');
    }
  };

  const handleUpdate = (index) => {
    const updated = [...courseTypes];
    updated[index] = newType;
    setCourseTypes(updated);
    setEditIndex(null);
    setNewType('');
  };

  const handleDelete = (index) => {
    const filtered = courseTypes.filter((_, i) => i !== index);
    setCourseTypes(filtered);
  };

  return (
    <div className="manager">
      <h2>Course Types</h2>
      <input
        value={newType}
        onChange={(e) => setNewType(e.target.value)}
        placeholder="Add or edit course type"
      />
      <button onClick={editIndex !== null ? () => handleUpdate(editIndex) : handleAdd}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>
      <ul>
        {courseTypes.map((type, i) => (
          <li key={i}>
            {type}
            <button onClick={() => { setEditIndex(i); setNewType(type); }}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseTypeManager;
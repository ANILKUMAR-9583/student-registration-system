import React, { useState } from 'react';

function CourseManager({ courses, setCourses }) {
  const [newCourse, setNewCourse] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (newCourse.trim() && !courses.includes(newCourse)) {
      setCourses([...courses, newCourse]);
      setNewCourse('');
    }
  };

  const handleUpdate = (index) => {
    const updated = [...courses];
    updated[index] = newCourse;
    setCourses(updated);
    setEditIndex(null);
    setNewCourse('');
  };

  const handleDelete = (index) => {
    const filtered = courses.filter((_, i) => i !== index);
    setCourses(filtered);
  };

  return (
    <div className="manager">
      <h2>Courses</h2>
      <input
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        placeholder="Add or edit course"
      />
      <button onClick={editIndex !== null ? () => handleUpdate(editIndex) : handleAdd}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>
      <ul>
        {courses.map((course, i) => (
          <li key={i}>
            {course}
            <button onClick={() => { setEditIndex(i); setNewCourse(course); }}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseManager;
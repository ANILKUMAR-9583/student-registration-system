import React, { useState } from 'react';

function OfferingManager({ courseTypes, courses, offerings, setOfferings }) {
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleAdd = () => {
    if (selectedType && selectedCourse) {
      const newOffering = {
        id: Number(Date.now()), // ✅ FIXED
        course: selectedCourse,
        type: selectedType
      };
      setOfferings([...offerings, newOffering]);
      // Optional: Reset selection
      setSelectedType('');
      setSelectedCourse('');
    }
  };

  const handleDelete = (id) => {
    setOfferings(offerings.filter(o => o.id !== id));
  };

  return (
    <div className="manager">
      <h2>Course Offerings</h2>
      <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
        <option value="">Select Type</option>
        {courseTypes.map((type, i) => <option key={i} value={type}>{type}</option>)}
      </select>
      <select value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map((course, i) => <option key={i} value={course}>{course}</option>)}
      </select>
      <button onClick={handleAdd}>Add Offering</button>

      <ul>
        {offerings.map(o => (
          <li key={o.id}>
            {o.type} - {o.course}
            <button onClick={() => handleDelete(o.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfferingManager;

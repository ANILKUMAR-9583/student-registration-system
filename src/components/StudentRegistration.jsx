import React, { useState } from 'react';

function StudentRegistration({ offerings, registrations, setRegistrations }) {
  const [studentName, setStudentName] = useState('');
  const [selectedOfferingId, setSelectedOfferingId] = useState('');
  const [filterType, setFilterType] = useState('');

  const handleRegister = () => {
    if (studentName.trim() && selectedOfferingId) {
      const newReg = {
        id: Date.now(),
        name: studentName.trim(),
        offeringId: Number(selectedOfferingId),
      };
      setRegistrations([...registrations, newReg]);
      setStudentName('');
      setSelectedOfferingId('');
    }
  };

  const filteredRegistrations = registrations.filter((r) => {
    const offering = offerings.find((o) => o.id === r.offeringId);
    return filterType === '' || (offering && offering.type === filterType);
  });

  return (
    <div className="manager">
      <h2>Student Registration</h2>

      <div className="form-row">
        <input
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Student Name"
        />
        <select
          value={selectedOfferingId}
          onChange={(e) => setSelectedOfferingId(e.target.value)}
        >
          <option value="">Select Offering</option>
          {offerings.map((o) => (
            <option key={o.id} value={o.id}>
              {o.type} - {o.course}
            </option>
          ))}
        </select>
        <button onClick={handleRegister}>Register</button>
      </div>

      <h3>Filter Registered Students by Type</h3>
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="">All Types</option>
        {[...new Set(offerings.map((o) => o.type))].map((type, i) => (
          <option key={i} value={type}>
            {type}
          </option>
        ))}
      </select>

      <h3>Registered Students</h3>
      {filteredRegistrations.length === 0 ? (
        <p>No students registered for this type.</p>
      ) : (
        <ul>
          {filteredRegistrations.map((r) => {
            const offering = offerings.find((o) => o.id === r.offeringId);
            return (
              <li key={r.id}>
                {r.name} - {offering ? `${offering.type} ${offering.course}` : '❌ Not Found'}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default StudentRegistration;

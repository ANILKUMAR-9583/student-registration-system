import React, { useState } from 'react';
import './styles.css';
import { initialData } from './data';
import CourseTypeManager from './components/CourseTypeManager';
import CourseManager from './components/CourseManager';
import OfferingManager from './components/OfferingManager';
import StudentRegistration from './components/StudentRegistration';

function App() {
  const [courseTypes, setCourseTypes] = useState(initialData.courseTypes);
  const [courses, setCourses] = useState(initialData.courses);
  const [offerings, setOfferings] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  return (
    <div className="app">
      <h1>Student Registration System</h1>
      <CourseTypeManager courseTypes={courseTypes} setCourseTypes={setCourseTypes} />
      <CourseManager courses={courses} setCourses={setCourses} />
      <OfferingManager
        courseTypes={courseTypes}
        courses={courses}
        offerings={offerings}
        setOfferings={setOfferings}
      />
      <StudentRegistration
        offerings={offerings}
        registrations={registrations}
        setRegistrations={setRegistrations}
      />
    </div>
  );
}

export default App;

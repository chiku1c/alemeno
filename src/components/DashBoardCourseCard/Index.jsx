import React, { useState } from "react";

const DashBoardCourseCard = ({ course }) => {
  const {
    name,
    duration,
    instructor,
  } = course;
  const [isCompleted, setCompleted] = useState(false);
  const [isSyllabusVisible, setSyllabusVisible] = useState(false);
   
  const markAsCompleted = () => {
    setCompleted(true);
    // data({isCompleted:isCompleted});

  };

  const toggleSyllabus = () => {
    setSyllabusVisible(!isSyllabusVisible);
  };

  return (
    <div className="flex bg-white rounded shadow-lg p-4 m-4 ">
      <div className="mt-4 w-full">
        <h2 className="text-xl font-semibold">{name && name}</h2>
        <p className="text-gray-600">Instructor: {instructor}</p>
        <p className="text-gray-600">Due Date: {duration}</p>
        <p className="text-gray-600">
          Progress: {isCompleted ? "Completed" : "In Progress"}
        </p>
        <div className="justify-between flex items-center w-full">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={markAsCompleted}
          >
            Mark as Completed
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded hover:bg-gray-400"
            onClick={toggleSyllabus}
          >
            {isSyllabusVisible ? "Hide Syllabus" : "Show Syllabus"}
          </button>
        </div>

        {isSyllabusVisible && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Syllabus</h3>
            {course?.syllabus.map((syllabus) => {
              return (
                <div>
                  <h5>Week:{syllabus.week} </h5>
                  <h1>topic:{syllabus.topic} </h1>
                  <h1>content:{syllabus.content}</h1>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardCourseCard;

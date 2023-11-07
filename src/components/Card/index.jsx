import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Card = ({
  description,
  duration,
  enrollmentStatus,
  id,
  instructor,
  courseLocation,
  name,
  prerequisites,
  schedule,
  students,
  syllabus,
  onClick,
  dislikes,
  onDislike,
}) => {
  let location = useLocation();
  const pathName =
    location?.pathname === "/"
      ? "Course List"
      : location?.pathname === "/course-details/:id"
      ? "Course Details"
      : "Dashboard";
  const [likes, setLikes] = useState(0);
  const [isSyllabusVisible, setSyllabusVisible] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    console.log(likes, "Likes");
  };
  const toggleSyllabus = () => {
    setSyllabusVisible(!isSyllabusVisible);
  };

  return (
    <div className=" flex flex-col justify-center relative overflow-hidden sm:py-12  shadow-md p-6">
      <div className="max-w-7xl mx-auto max-w-md mx-auto bg-white rounded-lg  ">
        <div className="relative group">
          <div
            onClick={() => onClick(id)}
            className="cursor-pointer absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Course Name:{name}</h2>
            <p className="text-sm text-gray-600 mb-4">
              Instructor's Name : {instructor}
            </p>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="mb-4">
              Enrollment Status :
              <span className="text-green-500 font-semibold">
                {enrollmentStatus}
              </span>
            </p>
            <p className="mb-4">Duration:{duration}</p>
            <p className="mb-4">Schedule:{schedule}</p>
            <p className="mb-4">Location:{courseLocation}</p>
            <p className="mb-4">Prerequisites:{prerequisites}</p>
          </div>
        </div>
        <button
        className="px-4 py-2 bg-gray-300 text-gray-600 rounded hover:bg-gray-400"
        onClick={toggleSyllabus}
      >
        {isSyllabusVisible ? "Hide Syllabus" : "Show Syllabus"}
      </button>
      {isSyllabusVisible && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Syllabus</h3>
          {syllabus.map((syllabus) => {
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
     

      {pathName === "Course List" && (
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleLike}
            className="text-green-500 cursor-pointer"
          >
            Like ({likes})
          </button>
          <button onClick={onDislike} className="text-red-500 cursor-pointer">
            Dislike ({dislikes})
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;

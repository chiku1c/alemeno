import React, { useState } from "react";
import { useGetCourseQuery } from "../../features/api/coursSlice";
import DashBoardCourseCard from "../../components/DashBoardCourseCard/Index";
import Loader from "../../components/Loader";

const DashBoard = () => {
  const {
    data: cours,
    isLoading,
  } = useGetCourseQuery();
  const [courseList, setCourseList] = useState(cours || []);
const studentNameToFind=localStorage.getItem("currentUser")
  // Check if cours is still loading or is undefined
  if (isLoading || !cours) {
    return (
      <div>
        <Loader size={35} />
      </div>
    );
  }

  const markCourseAsCompleted = (id) => {
    const updatedCourseList = courseList.map((course) =>
      course.id === id ? { ...course, completed: true } : course
    );
    setCourseList(updatedCourseList);
  };

  function findCourseByStudentName(studentNameToFind) {
    return courseList && courseList.find((course) =>
      course.students.some((student) => student.name === studentNameToFind)
    );
  }


  const foundCourse = findCourseByStudentName(studentNameToFind);
  return (
    <div className=" w-[100%,] h-[100vh] border border-gray-300 p-2 overflow-y-auto">
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <DashBoardCourseCard
          course={foundCourse}
          markCompleted={markCourseAsCompleted}
        />
      </div>
    </div>
  );
};

export default DashBoard;

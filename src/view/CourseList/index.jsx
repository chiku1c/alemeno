/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import {  useNavigate } from "react-router-dom";
import { useGetCourseQuery } from "../../features/api/coursSlice";
import { toast } from "react-toastify";

const CourseList = () => {
  const { data: courseData, isSuccess: courseSuccess } = useGetCourseQuery();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [dislikes, setDislikes] = useState(0);
  const authenticatedusers = localStorage.getItem("currentUser");

  const handleDetails = (id) => {
    if (authenticatedusers) {
      navigate(`/course-details/${id}`);
    } else {
      toast.warning("Please Select user!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: true,
      });
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCourses = (courseData ?? []).filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  const allStudents = (courseData ?? []).reduce((studentsArray, course) => {
    return studentsArray.concat(course.students);
  }, []);

  useEffect(() => {
    if (courseSuccess) {
      localStorage.setItem("alluser", JSON.stringify(allStudents));
    }
  }, [courseSuccess]);

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };


  return (
    <>
      
      <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
        <span className="relative w-full">
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search"
            className="w-full p-2 text-black transition border border-transparent focus:outline-none rounded py-3 px-2 pl-10 appearance-none leading-normal"
          />
          {/* ... */}
        </span>
      </div>
      <div className="flex flex-col">
        <div className="w-[100%,] h-[100vh] border border-gray-300 p-2 overflow-y-auto">
          <main className="grid gap-4 grid-cols-3 grid-rows-3">
            {filteredCourses?.map((course) => (
              <ul key={course.id}>
                <li className="mb-2">
                  <Card
                    {...course}
                    courseLocation={course.location}
                    onClick={() => handleDetails(course.id)}
                    dislikes={dislikes}
                    onDislike={handleDislike}
                  />
                </li>
              </ul>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default CourseList;

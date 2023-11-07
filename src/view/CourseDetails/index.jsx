import React, {  } from "react";

import Card from "../../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useGetCourseQuery } from "../../features/api/coursSlice";
import { useGetCourseDetailsQuery } from "../../features/api/courseDetailsSlice";

const CourseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const courseId = parseInt(id);
  const { data: courses, isLoading, isSuccess } = useGetCourseQuery();
  const currentCourse = isSuccess && courses.find((c) => c.id === courseId);
  const { data:details,   } = useGetCourseDetailsQuery(id);

console.log(details)

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      {isLoading ? (
        <Loader size={35} />
      ) : (
        <Card {...currentCourse} onClick={handleDashboard} />
      )}
    </div>
  );
};

export default CourseDetails;

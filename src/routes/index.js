import { lazy } from "react";

const CourseList = lazy(() => import("../view/CourseList/index"));
const CourseDetails = lazy(() => import("../view/CourseDetails/index"));
const DashBoard = lazy(() => import("../view/Dashboard/index"));

export const routeList = [
  {
    title: "courseList",
    path: "/",
    element: CourseList,
  },
  {
    title: "courseDetails",
    path: "/course-details/:id",
    element: CourseDetails,
  },
  {
    title: "dashboard",
    path: "/Dashboard",
    element: DashBoard,
  },
];

import { Suspense, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useGetUserQuery } from "../features/api/userSlice";
import { useDispatch, useSelector } from "react-redux";

const PageRoute = ({ title }) => {
  const dispatch = useDispatch();
  let location = useLocation();
  const navigate = useNavigate();

  const [dropdownState, setDropdownState] = useState("invisible");
  const [selectedUser, setSelectedUser] = useState("Select your Self");
  const state = useSelector((state) => state?.coursSlice);
  const queryData = state?.queries?.["getCourse(undefined)"]?.data;
  const { data } = useGetUserQuery(queryData);
  const authenticatedusers = localStorage.getItem("currentUser");

  const pathName =
    location?.pathname === "/"
      ? "Course List"
      : location?.pathname === "/course-details/:id"
      ? "Course Details"
      : "Dashboard";

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
    localStorage.setItem("currentUser", event.target.value);
    window.location.reload(false);
  };
  const toggleDropdown = () => {
    if (dropdownState) {
      setDropdownState(null);
    } else {
      setDropdownState("invisible");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <Suspense fallback={<Loader size={35} />}>
      <Navbar
        data={data}
        handleLogout={handleLogout}
        toggleDropdown={toggleDropdown}
        handleUserChange={handleUserChange}
        dispatch={dispatch}
        location={location}
        navigate={navigate}
        pathName={pathName}
        dropdownState={dropdownState}
        selectedUser={selectedUser}
        queryData={queryData}
        authenticatedusers={authenticatedusers}
      />
      <HelmetProvider context={{}}>
        <title>{title}</title>
        <Outlet authenticatedusers={authenticatedusers} /> {/* Pass authenticatedusers as a prop */}
      </HelmetProvider>
    </Suspense>
  );
};

export default PageRoute;

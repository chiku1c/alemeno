/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"; // Import React

const Navbar = ({
  data,
  handleLogout,
  toggleDropdown,
  handleUserChange,
  dispatch,
  location,
  navigate,
  pathName,
  dropdownState,
  selectedUser,
  queryData,
  authenticatedusers,
}) => {
  return (
    <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto sticky w-full z-20 top-0">
      <div className="flex flex-wrap items-center flex justify-between">
        <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
          <span className="text-xl pl-2">
            {pathName}
            <i className="em em-grinning"></i>
          </span>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
          {!authenticatedusers ? (
            <select
              id="user"
              style={{
                backgroundColor: "rgb(31 41 55 / var(--tw-bg-opacity))",
              }}
              className="bg-transparent text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:text-white"
              onChange={handleUserChange}
              value={selectedUser}
            >
              <option value="Select your Self">Select your Self</option>
              {data &&
                data.map((user, index) => {
                  return (
                    <option key={index} value={user?.name}>
                      {user?.name}
                    </option>
                  );
                })}
            </select>
          ) : (
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="flex-1 md:flex-none md:mr-3">
                <div className="relative inline-block">
                  <button
                    onClick={toggleDropdown}
                    className="drop-button text-white focus:outline-none"
                  >
                    <span className="pr-2">
                      <i className="em em-robot_face"></i>
                    </span>{" "}
                    <span className="text-white text-sm">{`Welcome: ${authenticatedusers}`}</span>
                    <svg
                      className="h-3 fill-current inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <div
                    id="myDropdown"
                    className={
                      "dropdownlist absolute bg-gray-800 text-white right-0  p-3 overflow-auto z-30 " +
                      dropdownState
                    }
                  >
                    <a className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block">
                      <i className="fa fa-user fa-fw"></i> Profile
                    </a>
                    <div className="border border-gray-800"></div>
                    <a
                      onClick={handleLogout}
                      className="p-2 hover:bg-gray-800 text-white cursor-pointer text-sm no-underline hover:no-underline block"
                    >
                      <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

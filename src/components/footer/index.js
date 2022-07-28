import React from "react";
const Footer = () => {
  return (
    <footer
      className="p-4 shadow md:flex md:items-center lg:justify-between lg:p-6 dark:bg-gray-900"
      style={{ marginTop: "30px" }}
    >
      <span className="text-sm text-white sm:text-center dark:text-white">
        Fatah RobbySalam &copy; 2022
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-white sm:mt-0">
        <li>
          <a
            className="mr-4 hover:underline md:mr-6 "
            href="https://github.com/FthRobby/react-notesapp"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            className="mr-4 hover:underline md:mr-6 "
            href="https://github.com/FthRobby/react-notesapp"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

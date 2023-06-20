import React from "react";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="container1">
        <h1>Welcome to DirectoryDice!</h1>
      </div>

      <div className="container2">
        <p className="homePara">
          DirectoryDice is a versatile and user-friendly application designed
          to simplify the process of creating and managing organization
          directories or class rosters.
        </p>
        <p className="homePara">Why use DirectoryDice?</p>
        <ul className="homePara">
          <li className="homePara">
            Intuitive interface and powerful features that allow for effortless
            creation, updating, and navigating of member database.
          </li>
          <li className="homePara">
            Easily create and customize directory by adding member names,title,
            and profile pictures.
          </li>
          <li className="homePara">
            Users can add, edit, and update existing members or removed outdated
            members with a few clicks!
          </li>
          <li className="homePara">
            Random select feature: offers unique funcitonality to randomly select
            users or groups for activities like raffles, choosing teams, or
            assigning tasks
          </li>
          <li className="homePara">
            Profile search is powerful search engine that allows user to quickly
            find specific members within the directory
          </li>
          <li className="homePara">
            User-friendly interface allows for seamless navigation and interaction
            with application
          </li>
          <li className="homePara">
            Data security: we prioritize confidentiality and security of YOUR data
            and utilize robust encryption methods to protect sensitive information
            and allow for data backup/restoration
          </li>
        </ul>
        <p className="homePara">
          Whether you are a teacher, event planner, or manager running a company,
          DirectoryDice simplifies process of creating and managing an interactive
          roster that brings convenience, efficiency, and fun!
        </p>

      </div>

    </div>
  );
};

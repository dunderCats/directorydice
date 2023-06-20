import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MembersGallery.scss";
import LogoutButton from '../components/logout';

export const MembersGallery = () => {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Used inside addNewMember() function
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost/members")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)

        setMembers(data);
      });
  }, []);

  const selectRandomMember = () => {
    const randomMemberIndex = Math.floor(Math.random() * members.length);
    const randomMember = members[randomMemberIndex];
    alert(`The turn is for ${randomMember.first_name}`);
  };

  const filterMembers = members.filter(
    (member) =>
      member.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.last_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Used in button to navigate to add new member form (see AddMember component)
  const addNewMember = () => {
    navigate("/addmember");
  };

  const handleDeleteMember = (deletedMember) => {
    // console.log("f: ", deletedMember.member_id);
    fetch(`http://localhost/member/${deletedMember.member_id}`, {
      method: "DELETE",
    });
    const deleteMembers = members.filter(
      (member) => member.member_id !== deletedMember.member_id
    );
    setMembers(deleteMembers);
  };

  return (
    <div className="MembersGallery">
      <div className="selectAddSearch">
        <button id="select" onClick={selectRandomMember}>
          Select
        </button>
        <button id="add" onClick={() => addNewMember()}>
          Add
        </button>
        <input
          placeholder="Search a member"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> {'  '}
         <LogoutButton/>
      </div>
      <div className="membersHeading">Members Gallery</div>
      <div className="grid">
        {filterMembers.map((member) => (
          <div className="grid_item" key={member.member_id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {member.prof_pic.length < 50 ? (
                  <img
                    src={process.env.PUBLIC_URL + member.prof_pic}
                    alt={member.first_name}
                  />
                ) : (
                  <img src={member.prof_pic} alt={member.first_name} />
                )}
              </div>
              <div className="flip-card-back">
                <div>
                  {member.first_name} {member.last_name}
                </div>
                <div>{member.title}</div>
                <button onClick={() => handleDeleteMember(member)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

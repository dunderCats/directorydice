
import React, { useState, useEffect } from "react";
import "./MembersGallery.scss";

export const MembersGallery = () => {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost/members")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)

        setMembers(data);
      });
  }, []);

  const selectRandomMember = () => {
    const randomMemberIndex = Math.floor(Math.random() * members.length);
    const randomMember = members[randomMemberIndex];
    alert(`The turn is for ${randomMember.first_name}`)
    ;
  };

  const filterMembers = members.filter((member) =>
    member.first_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="MembersGallery">
      
      <div className="selectAddSearch">
        <button id="select" onClick={selectRandomMember}>
          Select
        </button>
        <button id="add">Add</button>
        <input
          placeholder="Search a member"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <h1 className="membersHeading">Members Gallery</h1>
      <div className="grid">
        {filterMembers.map((member) => (
          <div className="grid_item" key={member.member_id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {member.prof_pic && (
                  <img src={member.prof_pic} alt={member.first_name} />
                )}
         
              </div>
              <div className="flip-card-back">
                <div>{member.first_name}</div>
                <div>{member.quote}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


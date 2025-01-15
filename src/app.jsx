import React, { useState, useEffect } from "react";
import initialUsers from "./data/namn.json";
import { useGroups } from "./context/GroupsContext";
import { Link } from "react-router";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [groupsCount, setGroupsCount] = useState(0);
  const { groups, setGroups } = useGroups();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      const newUser = { id: Date.now(), name };
      setUsers([...users, newUser]);
      setName("");
    }
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    const usersWithIds = initialUsers.map((name, index) => ({
      id: index + 1,
      name,
    }));
    setUsers(usersWithIds);
    setGroupsCount(groups.length);
  }, []);

  const handleGenerateGroups = () => {
    if (groupsCount > 0 && users.length >= groupsCount) {
      generateGroups();
    } else {
      alert(
        "Antalet grupper måste vara större än noll och mindre än eller lika med antalet användare."
      );
    }
  };

  const generateGroups = () => {
    const shuffledUsers = [...users].sort(() => 0.5 - Math.random());
    const newGroups = Array.from({ length: groupsCount }, () => []);

    shuffledUsers.forEach((user, index) => {
      newGroups[index % groupsCount].push(user);
    });

    setGroups(newGroups);
  };

  return (
    <div className="flex flex-row gap-80 mt-12 mx-5">
      <div>
        <form className="m-1" onSubmit={handleSubmit}>
          <input
            className="border-2 border-black mr-3"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <button type="submit">Submit</button>
        </form>
        <div className="w-fit">
          <div className="text-3xl my-3">Namn med i aktiviteten</div>
          <ul className="w-full border px-1 border-black">
            {users.map((user) => (
              <li key={user.id} className="flex justify-between my-0.5">
                {user.name}
                <button
                  onClick={() => removeUser(user.id)}
                  className="border rounded-md p-1"
                >
                  Ta bort
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="">Slumpmässig generator</div>
        <div className="flex">
          <input
            id="groups"
            type="number"
            value={groupsCount}
            onChange={(e) => setGroupsCount(Number(e.target.value))}
            className="border-2 border-black mr-3"
          />
          <button onClick={handleGenerateGroups}>Generera grupper</button>
        </div>
        <div className="w-fit mt-6">
          <ul className="grid grid-cols-2">
            {groups.map((group, index) => (
              <li key={index}>
                <h1 className="text-3xl">Grupp {index + 1}</h1>
                <ul>
                  {group.map((user) => (
                    <li className="text-xl" key={user.id}>
                      {user.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        to="/groups"
        className=" fixed bottom-3 right-3 rounded-md text-2xl border border-black p-2"
      >
        Till grupper
      </Link>
    </div>
  );
};

export default App;

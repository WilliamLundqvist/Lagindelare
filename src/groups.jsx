import React, { useState } from "react";
import { useGroups } from "./context/GroupsContext";
import Groupcard from "./components/groupcard";
import { Link } from "react-router";

const Groups = () => {
  const { groups } = useGroups();

  const [activities, setActivities] = useState([
    "Padel 1",
    "Squash 1",
    "Styrketräning",
    "Padel 2",
    "Squash 2",
    "Fotbollsspel",
    "Ledarsnack",
    "Squash 3",
  ]);

  const handleMoveActivitiesForward = () => {
    setActivities((prevActivities) => {
      const newActivities = [...prevActivities];
      const lastActivity = newActivities.pop();
      newActivities.unshift(lastActivity);
      return newActivities;
    });
  };

  const handleMoveActivitiesBack = () => {
    setActivities((prevActivities) => {
      const newActivities = [...prevActivities];
      const firstActivity = newActivities.shift();
      newActivities.push(firstActivity);
      return newActivities;
    });
  };

  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-800 text-white overflow-hidden">
      <Link
        to="/"
        className="absolute top-2 left-2 border-gray-300 border rounded-md p-1 bg-gray-700"
      >
        Tillbaka
      </Link>

      <div className="absolute top-2 left-28 flex gap-2">
        <button
          onClick={handleMoveActivitiesBack}
          className="bg-green-500 text-black px-3 py-1 rounded hover:bg-green-600"
        >
          Byt aktivitet bak
        </button>
        <button
          onClick={handleMoveActivitiesForward}
          className="bg-green-500 text-black px-3 py-1 rounded hover:bg-green-600"
        >
          Byt aktivitet fram
        </button>
      </div>

      <h1 className="text-4xl font-bold mt-5 text-green-500">Grupper</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4 px-5 py-2 w-full h-full">
        {groups.length === 0 ? (
          <p>Inga grupper har skapats ännu.</p>
        ) : (
          groups.map((group, index) => (
            <div key={index}>
              <Groupcard
                group={group}
                index={index}
                activity={activities[index % activities.length]}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Groups;

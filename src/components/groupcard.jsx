import React from "react";

const Groupcard = ({ group, index, activity }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-3xl shadow-xl h-full flex flex-col justify-between overflow-hidden">
      <h3 className="text-center text-white text-3xl font-semibold mb-3">
        Grupp {index + 1}
      </h3>
      <ul className="text-white flex flex-col items-center justify-stretch overflow-auto">
        {group.map((user) => (
          <li
            className="text-center"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
            key={user.id}
          >
            {user.name}
          </li>
        ))}
      </ul>
      <h3
        className="text-center text-green-500 font-semibold mb-3"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
      >
        {activity}
      </h3>
    </div>
  );
};

export default Groupcard;

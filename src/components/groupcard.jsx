import React from "react";

const Groupcard = ({ group, index, activity }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-3xl shadow-xl h-full flex flex-col justify-between items-center">
      <div>
        <h3 className="text-3xl font-semibold mb-4 text-center text-white">
          Grupp {index + 1}
        </h3>
        <ul className="text-xl text-white">
          {group.map((user) => (
            <li className="text-3xl mt-1" key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <h3 className="mx-auto text-3xl font-semibold mb-3 text-green-500">
        {activity}
      </h3>
    </div>
  );
};

export default Groupcard;

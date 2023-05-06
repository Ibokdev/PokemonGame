import React from "react";

function Avatar() {
  return (
    <div className="w-full p-20 flex justify-center items-center">
      <div className="">
        <h6>KAKUNA</h6>
        <img
          className=""
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
          alt=""
        />
        <div className="flex justify-between">
          <button className="bg-red-400 rounded px-5 text-white font-bold">
            Blaze
          </button>
          <button className="bg-red-400 rounded px-5 text-white font-bold">
            Solar-power
          </button>
        </div>
        <div className="flex-col justify-center">
          <h2>Hp:30</h2>
          <h2>Attack:52</h2>
          <h2>Defense:43</h2>
          <h2>Special Attack:50</h2>
          <h2>Speed</h2>
        </div>
      </div>
    </div>
  );
}

export default Avatar;

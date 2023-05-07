import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function pokemon() {
  const { id } = useParams();
  const AVATAR_URL = "https://pokeapi.co/api/v2/pokemon/";
  const [Avi, setAvi] = useState();

  const req = async () => {
    try {
      const axireq = await axios.get(`${AVATAR_URL}${id}`);
      setAvi(axireq.data);
      console.log(axireq.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    req();
  }, []);

  return (
    <div>
      <center>
        <div>
          <img
            className="h-[100px]"
            src={`${Avi?.sprites?.front_shiny}`}
            alt=""
          />
          {Avi?.stats?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between  w-[200px]"
            >
              <h5>{item?.stat?.name}</h5>
              <h5>{item?.base_stat}</h5>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}

export default pokemon;

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function AvatarCard({ fighter }) {
  const [Card, setCard] = useState({});
  const [On, setOn] = useState(false);

  const getAvatars = async () => {
    try {
      const response = await axios.get(fighter.url);
      console.log(response.data);
      setCard(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useState(() => getAvatars(), []);

  return (
    <section>
      <div
        onClick={() => setOn(!On)}
        className="rounded-lg flex w-[250px] bg-blue-200 h-[60px] items-center justify-around m-4 shadow"
      >
        <h5>{Card?.id}</h5>
        <img src={`${Card?.sprites?.front_shiny}`} alt="" />
        <h4>{fighter?.name}</h4>
      </div>
      {On ? (
        <center>
        <div>
          <img className="h-[100px]" src={`${Card?.sprites?.front_shiny}`} alt="" /> 
          {
            Card?.stats?.map((item,index)=>(
              <div key={index} className="flex items-center justify-between  w-[200px]">
              <h5>{item?.stat?.name}</h5>
              <h5>{item?.base_stat}</h5>
            </div>
            ))
          }
       
        </div>
        </center>
      ) : null}
    </section>
  );
}

export default AvatarCard;

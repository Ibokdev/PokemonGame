import React, {useEffect,useState} from "react";
import axios from "axios";
import AvatarCard from "../component/home/avatarCard";
import Avatar from "../component/home/avatar";
import Header from "../component/common/header";


function Home() {
  const [avatar,setAvatar] = useState({});

  const getAvatars = async () => {
    try {
      const req = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      // console.log(req.data);
      setAvatar(req.data)
    } catch (error) {
      console.log(error);
    }
  };
  {
  }

   useEffect(() => {
    getAvatars();
  }, []);

  return (
    <section>
      <div className="grid h-screen grid-cols-5 w-full">
        <div className="col-span-3 h-full grid grid-cols-2 p-8">
          <AvatarCard/>
          <AvatarCard/>
          <AvatarCard/>
          <AvatarCard/>
        </div>
        <div className="h-full col-span-2  ">
        <Avatar/>
        </div>
      </div>
    </section>
  )
}

export default Home
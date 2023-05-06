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
      <Header />
      <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto grid md:grid-cols-2 grid-cols-1">
       {
        avatar?.results?.map((avatar,index) => (
          <AvatarCard fighter={avatar} key={index}/>
        ))
       }
      </div>
    </section>
  );
}

export default Home;

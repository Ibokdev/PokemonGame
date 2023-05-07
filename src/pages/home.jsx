import React, {useEffect,useState} from "react";
import axios from "axios";
import AvatarCard from "../component/home/avatarCard";
import Avatar from "../component/home/avatar";
import Header from "../component/common/header";


function Home() {
  const [avatar,setAvatar] = useState({});
  const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon/");


  const getAvatars = async () => {
    try {
      const req = await axios.get(page);
      setAvatar(req.data)
      console.log(req?.data)
    } catch (error) {
      console.log(error);
    }
  };
  {
  }

   useEffect(() => {
    getAvatars();
  }, [page]);

  const handleNext = ()=>{
    if(avatar?.next){
      setPage(avatar?.next)
    }else{
      alert("this is the last page")
    }
  }

  
  const handlePrevious = ()=>{
    if(avatar?.previous){
      setPage(avatar?.previous)
    }else{
      alert("this is the last page")
    }
  }

  return (
  <section>
    <Header/>
    <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto grid grid-cols-1 md:grid-cols-2">
      {
        avatar?.results?.map((avatar,index) => (
          <AvatarCard fighter={avatar} key={index} />
        ))
      }
    </div>
    <div className='h-[100px] flex justify-between ml-5 mr-5 mt-10 pl-7 pr-7 md:ml-20 md:mr-20'>
    <button onClick={()=>{handlePrevious()}} className='font-semibold h-[40px] w-[100px] bg-slate-100 rounded-lg shadow'>Previous</button>
    <button onClick={()=>{handleNext()}} className='font-semibold h-[40px] w-[100px] bg-slate-100 rounded-lg shadow'>Next</button>
    </div>
    <div>
    </div>
  </section>
  )
}

export default Home
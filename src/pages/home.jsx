import React from "react";
import AvatarCard from "../component/home/avatarCard";
import Avatar from "../component/home/avatar";

function Home() {
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
  );
}

export default Home;

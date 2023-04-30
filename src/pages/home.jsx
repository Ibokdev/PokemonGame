import React from 'react'
import AvatarCard from '../component/home/avatarCard'

function Home() {
  return (
    <section>
      <div className="grid grid-cols-5 w-full">
        <div className="col-span-3 grid grid-cols-2 p-8">
          <AvatarCard />
          <AvatarCard />
          <AvatarCard />
          <AvatarCard />
        </div>
        <div className="col-span-2"></div>
      </div>
    </section>
  )
}

export default Home
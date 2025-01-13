import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import Menu from '../menu/Menu'
import FoodList from '../FoodList/FoodList'
// import DownLoadApp from '../DownLoadApp/DownloadApp'
import './Home.css'
const Home = () => {
  const [category, SetCategory] = useState("All");
  useEffect(() => {
    console.log(category)
  }, [category])

  return (
    <div>
      <Hero />
      <Menu category={category} SetCategory={SetCategory} />
      <FoodList category={category} />
       {/* <DownLoadApp/> */}
    </div>
  )
}

export default Home
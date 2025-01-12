import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import Menu from '../menu/Menu'
import FoodList from '../FoodList/FoodList'
import DownloadApp from '../DownLoadApp/DownloadApp'
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
      <DownloadApp />
    </div>
  )
}

export default Home
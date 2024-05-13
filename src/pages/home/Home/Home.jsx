import PopularDishes from "../PopularDishes";
import Banner from "../share/Banner";
import TheStory from "../share/TheStory";
import WhatWeOffer from "../share/WhatWeOffer";



export default function Home() {
 

  return (
    <div>
      <Banner />
      <TheStory></TheStory>
      <PopularDishes></PopularDishes>
      <WhatWeOffer/>
    </div>
  )
}





import { Helmet } from "react-helmet-async";
import Banner from "../share/Banner";
import BookaTable from "../share/BookaTable";
import PopularDishes from "../share/PopularDishes";
import TheStory from "../share/TheStory";
import WhatWeOffer from "../share/WhatWeOffer";
import HelmetTitle from "../../../components/HelmetTitle";



export default function Home() {


  return (
    <div>
      <Banner />
      <TheStory></TheStory>
      <PopularDishes></PopularDishes>
      <WhatWeOffer />
      <BookaTable></BookaTable>
    </div>
  )
}





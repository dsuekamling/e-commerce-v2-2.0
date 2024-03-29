import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import BannerCard from './BannerCard';
import surfBoards from '../../assets/img/homeBannerOne.jpg';
import shoes from '../../assets/img/homeBannerTwo.jpg';
import shirts from '../../assets/img/homeBannerThree.jpg';


function Home () {
  return(
    <div>
      <Hero />
      <Banner />
      <BannerCard 
        image={surfBoards}
        title="Channel Islands Surfboard"
        descr="Surfer surfing"
      />
      <BannerCard 
        image={shoes}
        title="Popular shoes brands"
        descr="Guy jumping with shoes on"
      />
      <BannerCard 
        image={shirts}
        title="Great Quality shirts"
        descr="Sweaters stacked on top of each other"
      />
    </div>
  );
}
// const Home = () => {
//   return(
//     <div>
//       <Hero />
//       <Banner />
//       <BannerCard 
//         image={surfBoards}
//         title="Channel Islands Surfboard"
//         descr="Surfer surfing"
//       />
//       <BannerCard 
//         image={shoes}
//         title="Popular shoes brands"
//         descr="Guy jumping with shoes on"
//       />
//       <BannerCard 
//         image={shirts}
//         title="Great Quality shirts"
//         descr="Sweaters stacked on top of each other"
//       />
//     </div>
//   );
// }
export default Home;
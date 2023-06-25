import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={process.env.PUBLIC_URL + "/Swap_Banner.png"}
          alt=""
        />

        <div className="home__row">
          <Product
            id="123"
            title="The Batman Figure"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TKzI-vCljrJ3uEFCYFTb0AHaHa%26pid%3DApi&f=1&ipt=b463e5cbc4e603b0508d0ee2ebf0d35b00681495d95a1778180952706b1f2226&ipo=images"
            rating={4}
          />
          <Product
            id="124"
            title="The Amazing Spiderman Figure "
            price={29.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MruRjKsjDQQDTK8dB9v7YAHaMz%26pid%3DApi&f=1&ipt=d249dc3dda05394bc2d466e505f5f19e1e33525d5ea2763ca6343343f8ad528e&ipo=images"
            rating={5}
          />
          <Product
            id="125"
            title="The King"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kGrpypq--lskKxLTDV0UIwHaGA%26pid%3DApi&f=1&ipt=87f38e2ab84a4b3ea398cc38a1084cd5a915922944e93704f401bc7ad639e6fe&ipo=images"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="126"
            title="Naruto"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HNCltP0kaiaQeomS3JjUygHaJT%26pid%3DApi&f=1&ipt=221258c72eb08b111b87e9a148b71c1bddee8e2d3ff23de75af1f1d30b7568cb&ipo=images"
            rating={1}
          />
          <Product
            id="127"
            title="The edgelord Mangekiu Sharingan Post Itachi Fight- Sasuke"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.x20lZET71eEP3EZA0D1FGgHaNa%26pid%3DApi&f=1&ipt=c45a43f985c528a60304f14486684ee03fd46b726628418a97473802702b4934&ipo=images"
            rating={4}
          />
        </div>

        {/* Third row with single products */}
        <div className="home__row">
          <Product
            id="32949249"
            title="Samsung S19F350HNW 18.5-inch AH IPS LED Monitor (Black) (Not A TV)"
            price={5500}
            rating={4}
            image="https://m.media-amazon.com/images/I/81JNAFOB3lL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import ShowDino  from "../components/Alternative-ShowDinos";
import {DinoCard} from "../components/DinoCard";

export default function Home() {
  return (
      <div className="container">
        <h2 className="home-title" >Which dino do you want to learn about?</h2>
        <div className="search-div">
          <input className="search-bar" placeholder="T-Rex" />
          <button className="filter-btn" >
            <img src="src\assets\filter.png" />
          </button>
        </div>
        <div className="categories">
          <div className="square">
            <img 
            className="home-icon"
            src="src\assets\carnivore-icon.png" 
            alt="carnivore icon"/>
          </div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <ShowDino />
        <DinoCard/>
        <DinoCard/>
      </div>
  )
}
import ShowDino  from "../components/Alternative-ShowDinos";

export default function Home() {
  return (
      <div className="container">
        <h2>Which dino do you want to learn about?</h2>
        <div className="search-bar">
          <input placeholder="T-Rex" />
          <button><img src="..\src\assets\filter.png" /></button>
        </div>
        <div className="categories">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <ShowDino />
      </div>
  )
}
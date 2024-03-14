import { ShowDinos } from "../components/Test-ShowDinos";

const Home = () => {
  return (
  <div>
    {/* Home page<br />
    <a href="/About">About</a> */}
    <div className="container">
      <h2>Which dino do you want to learn about?</h2>
      <ShowDinos></ShowDinos>
    </div>
  </div>
  );
};
export default Home;

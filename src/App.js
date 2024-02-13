import About from "./components/About";
import Contact from "./components/Contact";
import CustomPF from "./components/CustomPF";
// import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Teaching from "./components/Teaching";
import SocialLinks from "./components/SocialLinks";
import Publications from "./components/Publications";

function App() {
  return (
    <div className="">
      <div className="flex flex-col space-y-6">
        <NavBar className="" />
        <Home className="" />
      </div>
      <About className="" />
      {/* <Portfolio className="" /> */}
      <CustomPF />
      <Projects />
      <Teaching />
      <Publications />
      {/* <Experience /> */}
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
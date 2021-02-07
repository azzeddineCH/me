import About from "./about";
import Blogs from "./blogs";
import Experiences from "./experiences";
import Highlights from "./highlights";

export default function Body() {
  return (
    <div className="pl-6 sm:pl-12 pr-6 sm:pr-12 lg:pr-16 pb-4">
      <About />
      <Experiences />
      <Blogs />
      <Highlights />
      <div class={"text-opacity-25 mt-12"}>
        <h1>&copy; Azzeddine CHENINE, 2021</h1>
      </div>
    </div>
  );
}

import Body from "./components/body/body";
import Header from "./components/header/header";

function App() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row">
      <Header />
      <div
        className="w-full lg:w-2/3"
      >
        <Body />
      </div>
    </div>
  );
}

export default App;

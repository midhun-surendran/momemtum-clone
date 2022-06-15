import Datetoday from "./components/Datetoday";
import Quotes from "./components/Quotes";
import Time from "./components/Time";
import Weather from "./components/Weather";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Datetoday />
      <Wrapper>
        <Weather />
        <Time />
      </Wrapper>
      <Quotes />
    </div>
  );
}

export default App;

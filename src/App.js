import "./App.css";
import { Provider } from "react-redux";
import { WeatherContainer } from "./containers";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="title">Weather App</h1>
        <WeatherContainer />
      </div>
    </Provider>
  );
}

export default App;

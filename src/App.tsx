import { HomePage } from './components/HomePage';
import { Provider } from "react-redux";
import { store } from "./redux";

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  );
}

export default App;

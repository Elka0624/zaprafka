import './App.css'
import SignUp from './Components/SignUp/SignUp';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<SignUp />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

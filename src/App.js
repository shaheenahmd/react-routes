import { Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Stories from "./components/Stories";
import StorieList from "./components/StorieList";
import StorieID from "./components/StorieID";
import Profile from "./components/Profile";
import Error from "./components/Error";

function App() {
  return (
    <div className="bg-slate-200 w-full min-h-screen  mx-auto flex flex-col">
      <Header />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            {/* <Route path="stories" element={<Stories/>}/> */}
            <Route path="stories" element={<Stories/>}>
               {/* creating child routes */}
               <Route index element={<StorieList/>} />
               {/* creating dynamic parameter */}
               <Route path=":id" element={<StorieID/>}/>
            </Route>
            <Route path="profile" element={<Profile/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </main>

      <Footer />
    </div>
  );
}

export default App;

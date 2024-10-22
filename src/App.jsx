import Header from './component/Header';
import Footer from './component/Footer';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>       
    </div>
  );
}

export default App;

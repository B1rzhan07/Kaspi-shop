import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Partners from "./Components/Partners/Partners";
import Photo from "./Components/Photo/Photo";
import Services from "./Components/Services/Services";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <Photo />
      <div className="allWrapper">
        <Services />
      </div>
      <Shop />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;

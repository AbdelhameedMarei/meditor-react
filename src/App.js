import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Works from "./Pages/Works/Works";
import Book from "./Pages/Book/Book";
import Services from "./Pages/Services/Services";
import Testimonial from "./Pages/Testimonial/Testimonial";
import News from "./Pages/News/News";
import Footer from "./Components/Footer/Footer";

function App() {
      return (
        <>
          <Header />
          <Home />
          <About  />
          <Works />
          <Book />
          <Services />
          <Testimonial />
          <News />
          <Footer />
        </>
      )
}
export default App;
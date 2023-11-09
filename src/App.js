import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home";
import { Detail } from "./Pages/Detail";
import "./Components/style.css";
import { Cart } from "./Pages/Cart";
import hero from "./Assets/hero.svg";
import spring from "./Assets/spring.svg";
import SlidesContext from "./Shared/Context/SlidesContext";
import { Checkout } from "./Pages/Checkout";
import { CategoryPage } from "./Pages/CategoryPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  const slidesImages = [
    {
      imgPath: hero,
      title: "Carry your Funk",
      subTitle: "Trendy handbags collection for your party animal",
      backgroundColor: "#1B4B66",
      mainDivClass: "tag",
      linkTo: `/category?categoryName=handbags`,
    },
    {
      imgPath: spring,
      title: "Spring Summer Collection",
      subTitle: "UPTO 20% OFF",
      backgroundColor: "#B00020",
      mainDivClass: "tag1",
      linkTo: `/category?categoryName=Apparels`,
    },
  ];
  return (
    <SlidesContext.Provider value={slidesImages}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/detail/:productId"
              element={<Detail />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/category"
              element={<CategoryPage />}
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </SlidesContext.Provider>
  );
}

export default App;

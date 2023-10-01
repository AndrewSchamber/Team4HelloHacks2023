import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame11 from "./pages/Frame11";
import Frame8 from "./pages/Frame8";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame5 from "./pages/Frame5";
import Frame6 from "./pages/Frame6";
import Frame9 from "./pages/Frame";
import Group from "./pages/Group";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-13":
        title = "";
        metaDescription = "";
        break;
      case "/frame-25":
        title = "";
        metaDescription = "";
        break;
      case "/frame-15":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-5":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/frame-12":
        title = "";
        metaDescription = "";
        break;
      case "/group-22":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame11 />} />
      <Route path="/frame-13" element={<Frame8 />} />
      <Route path="/frame-25" element={<Frame1 />} />
      <Route path="/frame-15" element={<Frame2 />} />
      <Route path="/frame-2" element={<Frame3 />} />
      <Route path="/frame-5" element={<Frame5 />} />
      <Route path="/frame-6" element={<Frame6 />} />
      <Route path="/frame-12" element={<Frame9 />} />
      <Route path="/group-22" element={<Group />} />
    </Routes>
  );
}
export default App;

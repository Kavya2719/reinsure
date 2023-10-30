import { HomePage, AboutUsPage, ContactUsPage, GetQuotePage, RightPlanPage, PersonalisedPlanPage, ProtectionPlanPage } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage screenSize={screenSize} />}
        />

        <Route
          path="/about-us"
          element={<AboutUsPage screenSize={screenSize}/>}
        />

        <Route
          path="/contact-us"
          element={<ContactUsPage screenSize={screenSize} />}
        />

        <Route
          path="/get-quote"
          element={<GetQuotePage screenSize={screenSize} />}
        />

        <Route
          path="/get-quote-1"
          element={<RightPlanPage screenSize={screenSize} />}
        />

        <Route
          path="/get-quote-1"
          element={<RightPlanPage screenSize={screenSize} />}
        />

        <Route
          path="/get-quote-2"
          element={<PersonalisedPlanPage />}
        />

        <Route
          path="/get-quote-3"
          element={<ProtectionPlanPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

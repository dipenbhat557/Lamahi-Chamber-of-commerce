import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import EventPage from "./EventPage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Committee from "./Committee";
import AfterEvent from "./AfterEvent";
import AfterPressRelease from "./AfterPressRelease";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/committee" element={<Committee />} />

        <Route path="/afterevent" element={<AfterEvent />} />
        <Route path="/afterpress" element={<AfterPressRelease />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;

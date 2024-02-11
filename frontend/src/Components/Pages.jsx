import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./Loading";

const HomePage = lazy(() => import("./Homepage"));
const EventPage = lazy(() => import("./EventPage"));
const AboutUs = lazy(() => import("./AboutUs"));
const ContactUs = lazy(() => import("./ContactUs"));
const Committee = lazy(() => import("./Committee"));
const AfterEvent = lazy(() => import("./AfterEvent"));
const AfterPressRelease = lazy(() => import("./AfterPressRelease"));

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/events"
          element={
            <Suspense fallback={<Loading />}>
              <EventPage />
            </Suspense>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Suspense fallback={<Loading />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/contactus"
          element={
            <Suspense fallback={<Loading />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/committee"
          element={
            <Suspense fallback={<Loading />}>
              <Committee />
            </Suspense>
          }
        />
        <Route
          path="/afterevent"
          element={
            <Suspense fallback={<Loading />}>
              <AfterEvent />
            </Suspense>
          }
        />
        <Route
          path="/afterpress"
          element={
            <Suspense fallback={<Loading />}>
              <AfterPressRelease />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;

import { lazy, Suspense } from "react";
import Loading from "./Loading";

const Hero = lazy(() => import("./Hero"));
const Welcome = lazy(() => import("./Welcome"));
const Events = lazy(() => import("./Events"));
const View = lazy(() => import("./View"));
const Subscriptions = lazy(() => import("./Subscriptions"));
const Press = lazy(() => import("./Press"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

const HomePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <Welcome />
      <Events />
      <View />
      <Subscriptions />
      <Press />
      <Contact />
      <Footer></Footer>
    </Suspense>
  );
};
export default HomePage;

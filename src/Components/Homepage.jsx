import { lazy, Suspense } from "react";
import Loading from "./Loading";
import Welcome from "./Welcome";
import Events from "./Events";
import View from "./View";
import Subscriptions from "./Subscriptions";
import Press from "./Press";
import Contact from "./Contact";

const Hero = lazy(() => import("./Hero"));

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
    </Suspense>
  );
};
export default HomePage;

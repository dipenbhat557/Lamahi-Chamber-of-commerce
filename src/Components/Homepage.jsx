import { lazy, Suspense } from "react";
import Loading from "./Loading";
import Welcome from "./Welcome";

const Hero = lazy(() => import("./Hero"));

const HomePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <Welcome />
    </Suspense>
  );
};
export default HomePage;

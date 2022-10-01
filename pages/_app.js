import Instructions from "../components/instructions/Instructions";
import NavbarLevel0AsPath from "../components/navbar/level-0-asPath/NavbarLevel0AsPath";
import NavbarLevel0Link from "../components/navbar/level-0-link/NavbarLevel0Link";
import NavbarLevel1 from "../components/navbar/level-1/NavbarLevel1";
import NavbarLevel2 from "../components/navbar/level-2/NavbarLevel2";
import NavbarLevel3 from "../components/navbar/level-3/NavbarLevel3";
import NavbarLevel4 from "../components/navbar/level-4/NavbarLevel4";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>Level 0 [Link] : </h1>
      <NavbarLevel0Link  />

      <h1>Level 0 [asPath] : </h1>
      <NavbarLevel0AsPath  />

      <h1>Level 1: </h1>
      <NavbarLevel1  />

      <h1>Level 2: </h1>
      <NavbarLevel2  />

      <h1>Level 3: </h1>
      <NavbarLevel3  />

      <h1>Level 4: </h1>
      <NavbarLevel4 />

      <Component {...pageProps}   />

      <Instructions   />
    </>
  );
}

export default MyApp;

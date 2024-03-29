import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Utils/Theme";
import Navbar from "./Components/nAVBAR";
import Hero from "./Components/HeroSection";
import Skills from "./Components/Skills/Index";
import Projects from "./Components/Projects";
import { BrowserRouter } from "react-router-dom";
import Education from "./Components/Education";
import ContactMe from "./Components/ContactMe";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  background: linear-gradient(
      38.7deg,
      rgba(0, 45, 98, 1) 0%,
      //pink
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );

  width: 100%;
`;

function App() {
  // function Section({ id }) {
  //   const location = useLocation();

  //   useEffect(() => {
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }, [id, location]);
  // }

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
          </Wrapper>
          <Projects />
          <Wrapper>
            <Education />
          </Wrapper>
        </Body>
        <ContactMe />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import Quotes from "./components/Quotes";
import { Footer } from "./components/styles/Footer.styled";
import { GlobalStyles } from "./components/styles/Global.styled";
import { Header } from "./components/styles/Header.styled";
import { ThemeButton, ThemeContainer } from './components/styles/ThemeSwitching.styled';
import { ThemeProvider } from 'styled-components';
import { light, dark, blue, green, brown, pink, } from './components/styles/Theme.styled';
import { useState } from "react";
import useFetchTheme from "./hook/useFetchTheme";

function App() {
  const [selectedTheme, setSelectedTheme] = useState('')
  const [apiTheme, loading] = useFetchTheme()

  return (
    <>
      {
        loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> :
          <ThemeProvider theme={selectedTheme ? selectedTheme : apiTheme}>
            <div className="App">
              <GlobalStyles />
              <Header>Game of Thrones Quotes</Header>
              <ThemeContainer>
                <span>Themes: </span>
                <ThemeButton
                  className={`light ${selectedTheme === light ? 'active' : ''}`}
                  onClick={() => setSelectedTheme(light)}
                ></ThemeButton>
                <ThemeButton
                  className={`dark ${selectedTheme === dark ? 'active' : ''}`}
                  onClick={() => setSelectedTheme(dark)}
                ></ThemeButton>
                <ThemeButton
                  className={`blue ${selectedTheme === blue ? 'active' : ''}`}
                  onClick={() => setSelectedTheme(blue)}
                ></ThemeButton>
                <ThemeButton
                  className={`green ${selectedTheme === green ? 'active' : ''}`}
                  onClick={() => setSelectedTheme(green)}
                ></ThemeButton>
                <ThemeButton
                  className={`brown ${selectedTheme === brown ? 'active' : ''}`}
                  onClick={() => setSelectedTheme(brown)}
                ></ThemeButton>
                <ThemeButton
                  className={`pink ${selectedTheme === pink ? 'active' : ''}`}
                  onClick={() => setSelectedTheme(pink)}
                ></ThemeButton>
              </ThemeContainer>
              <Quotes />
              <Footer>
                <p>Clone by NVC</p>
              </Footer>
            </div>
          </ThemeProvider >
      }
    </>
  );
}

export default App;
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header, Container } from "./Components";
import { BtnTheme, GlobalStyle, TemaClaro, TemaOscuro } from "./UI";
import SwitchTheme from "./utils/SwitchTheme";
import { GetSate, UpdateSate } from "./utils/StateTheme";

function App() {
    const [changed, setChanged] = useState(GetSate);

    const toggleTheme = () => {
        setChanged((changed) => !changed);
        UpdateSate(!changed);
    };

    return (
        <ThemeProvider theme={changed ? TemaClaro : TemaOscuro}>
            <GlobalStyle />
            <BtnTheme onClick={toggleTheme}>
                <SwitchTheme changed={changed} />
            </BtnTheme>
            <Header />
            <Container />
        </ThemeProvider>
    );
}

export default App;

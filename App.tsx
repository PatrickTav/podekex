//base
import { StatusBar } from "react-native";

// Temas
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

// Pages
import WelcomePage from "./src/pages/WelcomePage";






export default function App() {

  


 

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <WelcomePage />
    </ThemeProvider>
  );
}

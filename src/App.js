import Header from "./componentes/Header";
import Persquisa from "./componentes/Pesquisa";
import styled from "styled-components";
import UltimosLancamentos from "./componentes/UltimosLacnamentos";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Persquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;

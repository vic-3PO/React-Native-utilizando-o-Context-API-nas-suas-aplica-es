import Rotas from "./src/rotas";
import { TemaProvider } from "./src/context/TemaContext";
import { AutenticacaoProvider } from "./src/context/AutenticacaoContext";
import { ProdutosProvider } from "./src/context/ProdutosContext";

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <ProdutosProvider>
          <Rotas />
        </ProdutosProvider>
      </AutenticacaoProvider>
    </TemaProvider>
  );
}
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero.jsx"
import { perfil } from "./data/perfil.js"
import { coresDasTecnologias } from './data/tecnologias.js'
import Footer from './components/Footer/Footer.jsx'
import Secao from './components/Secao/Secao.jsx'
import Perfil from './components/Perfil/Perfil.jsx'
import Card from './components/Card/Card.jsx'
import Badge from './components/Badge/Badge.jsx'

function App() {

  return (
    <>
      <Header usuario={perfil.usuario} />
      <main>
        <Hero
          nome={perfil.usuario}
          cargo={perfil.cargo}
          resumo={perfil.resumo}
          cidade={perfil.cidade}
        />

        <Secao>
          <p className="etiqueta-secao">01 / sobre</p>
          <h2 className="secao__titulo">Quem sou eu</h2>
          <div className="sobre">
            <Perfil
              nome={perfil.nome}
              cidade={perfil.cidade}
              resumo2={perfil.resumo2}
            />

            <Card>
              <h3 className="rotulo">Habilidades</h3>
              <div className="lista-etiquetas lista-etiquetas--grande">
                {perfil.habilidades.map((habilidade) => (
                  <Badge
                    key={habilidade}
                    texto={habilidade}
                    cor={coresDasTecnologias[habilidade]}
                  />
                ))}
              </div>
            </Card>


          </div>

        </Secao>

      </main >

      <Footer nome={perfil.nome} email={perfil.email} />
    </>
  )
}
export default App

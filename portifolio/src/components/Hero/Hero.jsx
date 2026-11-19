import Icone from '../Icone/Icone'

function Hero({nome, cargo, resumo, cidade}) {
    return (
        <section className="hero" id="topo">
            <div className="container hero_linha">
                <div className="hero_status">
                    <p>em busca de um estágio</p>
                    <h1>
                        (nome)
                        <span>.</span>
                    </h1>

                    <p className="hero_cargo">(cargo)</p>
                    <p className="hero_resumo">(resumo)</p>

                    <div className="hero_acoes">

                        <a className="botao botao--primario" href='#projetos'>
                            ver projetos <Icone nome="seta"/>
                        </a>

                        <a className="botao botao--primario" href='#contato'>
                            falar comigo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
function Perfil({ nome, cidade, resumo2 }) {
  return (
    <article className="sobre__texto">
      <p>
        Oi, eu sou {nome}, de {cidade}. {resumo2}
      </p>
    </article>
  )
}

export default Perfil
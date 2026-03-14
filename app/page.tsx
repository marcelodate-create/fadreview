export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial",
      padding: "40px",
      maxWidth: "900px",
      margin: "0 auto"
    }}>

      {/* HERO */}
      <section style={{marginBottom:"60px"}}>
        <h1 style={{fontSize:"42px"}}>FadReview</h1>
        <p style={{fontSize:"18px",color:"#555"}}>
          Crie relatórios profissionais com fotos diretamente do celular.
        </p>

        <button style={{
          marginTop:"20px",
          padding:"12px 20px",
          background:"#000",
          color:"#fff",
          border:"none",
          borderRadius:"6px",
          fontSize:"16px",
          cursor:"pointer"
        }}>
          Criar Relatório
        </button>
      </section>

      {/* COMO FUNCIONA */}
      <section style={{marginBottom:"60px"}}>
        <h2>Como funciona</h2>

        <ol style={{lineHeight:"2"}}>
          <li>Tire fotos do serviço</li>
          <li>Adicione observações</li>
          <li>O sistema gera um relatório visual</li>
          <li>Compartilhe com o cliente</li>
        </ol>
      </section>

      {/* BENEFÍCIOS */}
      <section style={{marginBottom:"60px"}}>
        <h2>Benefícios</h2>

        <ul style={{lineHeight:"2"}}>
          <li>Relatórios rápidos</li>
          <li>Funciona direto do celular</li>
          <li>Ideal para obras, manutenção e serviços técnicos</li>
          <li>Envio profissional para clientes</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer style={{
        marginTop:"80px",
        borderTop:"1px solid #ddd",
        paddingTop:"20px",
        color:"#777"
      }}>
        FadReview © 2026
      </footer>

    </main>
  )
}

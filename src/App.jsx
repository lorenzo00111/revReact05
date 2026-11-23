import s from './App.module.css'
import { Menu } from './components/menu'

function App() {
  return (
    <>
      <Menu />
      <main className={s.wrapHome}>
        <section className={s.hero}>
          <div className={s.heroOverlay} />
          <div className={s.heroContent}>
            <span className={s.eyebrow}>PORTO ALEGRE · RS</span>
            <h1>Grêmio<br /><strong>Imortal Tricolor</strong></h1>
            <p>Paixão, história e futebol no coração do Rio Grande do Sul.</p>
            <a className={s.cta} href="/charts">Ver números do clube</a>
          </div>
        </section>

        <section className={s.highlights}>
          <article className={s.featureCard}>
            <div className={s.cardPhotoArena} role="img" aria-label="Arena do Grêmio" />
            <div className={s.cardCopy}>
              <span>Nosso estádio</span>
              <h2>Arena do Grêmio</h2>
              <p>Uma das principais arenas do futebol brasileiro, lar da torcida tricolor.</p>
            </div>
          </article>

          <article className={s.featureCard}>
            <div className={s.cardPhotoPanorama} role="img" aria-label="Vista panorâmica da Arena do Grêmio" />
            <div className={s.cardCopy}>
              <span>Paixão inconfundível</span>
              <h2>O gigante tricolor</h2>
              <p>Uma história construída por torcedores que vivem cada minuto.</p>
            </div>
          </article>

          <article className={s.featureCard}>
            <div className={s.cardPhotoLetreiro} role="img" aria-label="Letreiro da Arena do Grêmio" />
            <div className={s.cardCopy}>
              <span>Tradição azul, preta e branca</span>
              <h2>Orgulho gremista</h2>
              <p>Mais que um clube: uma identidade que atravessa gerações.</p>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default App

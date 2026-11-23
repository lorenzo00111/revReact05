import { useState } from 'react'
import s from './Contact.module.css'
import { Menu } from './components/menu'

function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    setSent(true)
  }

  return (
    <>
      <Menu />
      <main className={s.page}>
        <section className={s.contactCard}>
          <div className={s.info}>
            <span className={s.eyebrow}>FALE CONOSCO</span>
            <h1>Envie sua <strong>mensagem</strong></h1>
            <p>
              Tem uma dúvida, sugestão ou quer conversar sobre o Grêmio?
              Estamos prontos para ouvir você.
            </p>

            <div className={s.details}>
              <div>
                <span>Localização</span>
                <strong>Porto Alegre · RS</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>contato@gremio.com.br</strong>
              </div>
              <div>
                <span>Atendimento</span>
                <strong>Segunda a sexta, 9h às 18h</strong>
              </div>
            </div>
          </div>

          <form className={s.form} onSubmit={handleSubmit}>
            <label>
              Nome
              <input type="text" name="name" placeholder="Seu nome" required />
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="seu@email.com" required />
            </label>

            <label>
              Assunto
              <select name="subject" defaultValue="">
                <option value="" disabled>Selecione um assunto</option>
                <option value="sugestao">Sugestão</option>
                <option value="duvida">Dúvida</option>
                <option value="parceria">Parceria</option>
                <option value="outro">Outro assunto</option>
              </select>
            </label>

            <label>
              Mensagem
              <textarea name="message" placeholder="Como podemos ajudar?" rows="5" required />
            </label>

            <button type="submit">Enviar mensagem</button>

            {sent && (
              <p className={s.success} role="status">
                Mensagem enviada! Responderemos em breve.
              </p>
            )}
          </form>
        </section>
      </main>
    </>
  )
}

export default Contact

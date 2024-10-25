import React from "react";
import "./index.css";
import envelope_1 from "../../assets/envelope-text.png";
import mini_instagram from "../../assets/mini-insta.png";

const Contato = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "44c770fc-2927-48d1-aa95-1fb09c769578");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contato"
      className="contato"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h2 className="contato1">Contato</h2>

      <div className="informacoes">
        <h3>Mande-nos uma mensagem</h3>
        <div className="coluna-contato">
          <div>
            <p className="texto">
              Sinta-se a vontade para entrar em contato através do formulário de
              contato ou encontre nossas informações de contato abaixo:
            </p>
            <div>
              <div className="contact-item">
                <img
                  src={mini_instagram}
                  alt="ícone pequeno do instagram"
                  className="mini-insta icons"
                />
                <a
                  href="https://www.instagram.com/yankiis_cdanjos/"
                  target="_blank"
                  className="insta-yankii"
                >
                  https://www.instagram.com/yankiis_cdanjos/
                </a>
              </div>
              <div className="contact-item">
                <img
                  src={envelope_1}
                  alt="envelope-de-email"
                  className="envelope-msgs icons"
                />
                <p className="emailyankiis">yankiiskatana@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="coluna-contato-form">
            <form onSubmit={onSubmit}>
              <label>Seu Nome</label>
              <input
                type="text"
                name="name"
                placeholder="Digite seu Nome"
                required
              />

              <label>Seu Email </label>
              <input
                type="text"
                name="email"
                placeholder="Digite seu Email"
                required
              />

              <label>Escreva suas Mensagens Aqui</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Digite sua Mensagem"
                required
              ></textarea>
              <button type="submit" className="btn-submit">
                Enviar
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;

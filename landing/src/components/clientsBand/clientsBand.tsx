import "./clientsBand.css";

export function ClientsBand() {
  const clientLogos = [
    {
      src: new URL("../../../imgs/containerSolLogo.png", import.meta.url).href,
      alt: "Container Sol",
    },
    {
      src: new URL("../../../imgs/JaramilloLogo.png", import.meta.url).href,
      alt: "Jaramillo",
    },
    {
      src: new URL("../../../imgs/LladoLogo.png", import.meta.url).href,
      alt: "Llado",
    },
    {
      src: new URL("../../../imgs/ProyelcoLog.png", import.meta.url).href,
      alt: "Proyelco",
    },
  ];

  const marqueeLogos = [
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
  ];

  return (
    <section className="clientsBand" aria-label="Clientes que confían en nosotros">
      <div className="clientsBand__title">Texto </div>

      <div className="clientsBand__frame">
        <div className="clientsBand__line" />

        <div className="clientsBand__viewport">
          <div className="clientsBand__track">
            {[0, 1].map((groupIndex) => (
              <div
                className="clientsBand__group"
                key={`clientsBand-group-${groupIndex}`}
                aria-hidden={groupIndex === 1}
              >
                {marqueeLogos.map((logo, logoIndex) => (
                  <div className="clientsBand__logoCard" key={`${groupIndex}-${logo.alt}-${logoIndex}`}>
                    <img className="clientsBand__logo" src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="clientsBand__line" />
      </div>
    </section>
  );
}

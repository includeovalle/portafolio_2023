import React, { ReactNode } from "react";
import styles from "./index.module.scss";

interface TextBannerProps {
  className?: string;
  title: string;
  children: ReactNode;
}

const TextBanner = {
  index: ({ className = styles['default'], title, children }: TextBannerProps) => {
    return (
      <div className={className}>
        <section>
          <h3>{title}</h3>
          {children}
        </section >
      </div>
    );
  }

  , producto: () => {
    const copy = {
      title: "¡Habla con Nuestro Equipo Hoy!"
      , children: <>
        <p>Entendemos que cada proyecto es único, y estamos comprometidos a ofrecer soluciones a medida que cumplan con tus requisitos y objetivos. No importa si es un proyecto a pequeña o gran escala, nuestra amplia experiencia y productos de primera calidad garantizan resultados excepcionales.</p>
        <p>No permita que el deterioro de su aislamiento industrial afecte sus operaciones. Confíe en nuestro equipo para brindarle los materiales de aislamiento industrial que marcan la diferencia. Contactanos hoy mismo y descubre cómo podemos ayudarte a optimizar la eficiencia y la seguridad de tu empresa.</p>
      </>
    }
    return TextBanner.index({ ...copy });
  }

  , nosotros: () => {
    const copy = {
      title: "¡Habla con Nuestro Equipo Hoy!"
      , children: <p>Entendemos que cada proyecto es único, y estamos comprometidos a ofrecer soluciones a medida que cumplan con tus requisitos y objetivos. No importa si es un proyecto a pequeña o gran escala, nuestra amplia experiencia y productos de primera calidad garantizan resultados excepcionales.</p>
      , className: styles['no-margin']
    }
    return TextBanner.index({ ...copy });
  }

  , contacto: () => {
    const copy = {
      title: "¡Habla con Nuestro Equipo Hoy!"
      , children: <p> Nuestro equipo profesional está listo para responder tus preguntas, discutir tus requisitos y encontrar la mejor manera de colaborar contigo. Comunícate con nosotros y descubre cómo podemos contribuir al éxito de tu empresa. </p>
      , className: styles['no-margin']
    }
    return TextBanner.index({ ...copy });
  }

}

export default TextBanner;

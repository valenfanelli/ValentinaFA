import React from "react"
import { useTranslation } from "react-i18next";
import '../App.css';

function Proyectos() {
  const { t } = useTranslation();
  const projects = t("pro_items", { returnObjects: true });

  if (!Array.isArray(projects) || projects.length === 0) return null;

  return (
    <>
        <div className="d-flex justify-content-center bg-sec w-100 roboto-mono">
            <div className="text-center m-2 scroll-reveal">
                <h3 className="p-2">{t("pro_titulo")}</h3>
                <div className="container">
                    <div className="proyectos">
                        {projects.map((proyecto, index) => (
                            <div key={index} className="proyecto">
                                <h5>{proyecto.title}</h5>
                                <p>{proyecto.description}</p>
                                <a className="btn-custom" href={proyecto.url} target="_blank" rel="noopener noreferrer">
                                    {t("pro_boton")}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Proyectos
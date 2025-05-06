import {React} from "react"
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import '../App.css';
function Proyectos() {
  const { t } = useTranslation();
  const list = t("pro_list", { returnObjects: true }); 
  console.log(list)
  return (
    <>
        <div className="d-flex justify-content-center bg-sec w-100 roboto-mono">
            <div className="text-center m-2 fade-in-up">
                <h3 className="p-2">{t("pro_titulo")}</h3>
                <div className="container">
                    <div className="proyectos">
                        {list.map((proyecto, index) => (
                            <div key={index} className="proyecto">
                                <h5>{proyecto.titulo}</h5>
                                <p>{proyecto.descripcion}</p>
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
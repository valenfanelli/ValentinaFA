import React from "react"
import '../App.css';
import html from '../img/HTML.png';
import css from '../img/css.webp';
import php from '../img/php.png';
import c from '../img/C.png';
import google from '../img/googlecloud.png';
import react from '../img/react.png';
import github from '../img/github.png';
import spring from '../img/javaspring.png';
import ros from '../img/ros2.png';
import sql from '../img/sql.png';
import java from '../img/java.png';
import javascript from '../img/JavaScript.png';
import oracle from '../img/oracle.png';
import arduino from '../img/arduino.png';
import pgsql from '../img/postgreSQL.png';
import ia from '../img/ai.png';
import { useTranslation } from "react-i18next";

const techs = [
  { name: "HTML",        src: html },
  { name: "CSS",         src: css },
  { name: "PHP",         src: php },
  { name: "C",           src: c },
  { name: "Google Cloud",src: google },
  { name: "React",       src: react },
  { name: "GitHub",      src: github },
  { name: "Java Spring", src: spring },
  { name: "ROS2",        src: ros },
  { name: "SQL",         src: sql },
  { name: "Java",        src: java },
  { name: "JavaScript",  src: javascript },
  { name: "Oracle SQL",  src: oracle },
  { name: "Arduino",     src: arduino },
  { name: "PostgreSQL",  src: pgsql },
  { name: "AI", src:ia }
];

const SIZES = [105, 100, 100, 100, 100, 100, 100, 100, 110, 110, 100, 100, 100, 115, 100, 100, 100];

function Tecnologias() {
  const { t } = useTranslation();
  return (
    <div className="d-flex bg-sec roboto-mono">
      <div className="text-center w-100">
        <div className="container scroll-reveal">
          <h3 className="p-2">{t("tec_titulo")}</h3>
          <div className="tech-cloud">
            {techs.map((tech, i) => (
              <div
                key={tech.name}
                className="tech-float"
                style={{
                  width: SIZES[i],
                  height: SIZES[i],
                }}
              >
                <img src={tech.src} alt={tech.name} />
                <span className="tech-label">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tecnologias
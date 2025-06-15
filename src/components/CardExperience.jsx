import React from 'react';
// Importa solo los íconos que realmente usas en tu experiencia:
import { FaFileExcel } from 'react-icons/fa';
import { SiTeamviewer, SiHtml5, SiCss3, SiFigma, SiJavascript} from 'react-icons/si';
import { SiCisco, SiTplink, SiWireshark } from 'react-icons/si';
import { FaNetworkWired, FaTools } from 'react-icons/fa';
// Mapea el nombre de la herramienta (en minúsculas) al ícono correspondiente
const ICON_MAP = {
  excel: <FaFileExcel title="Excel" className="text-green-700 text-2xl" />,
  teamviewer: <SiTeamviewer title="TeamViewer" className="text-blue-500 text-2xl" />,
  html: <SiHtml5 title="HTML5" className="text-orange-500 text-2xl" />,
  css: <SiCss3 title="CSS3" className="text-blue-600 text-2xl" />,
  figma: <SiFigma title="Figma" className="text-pink-500 text-2xl" />,
  javascript: <SiJavascript title="JavaScript" className="text-yellow-400 text-2xl" />,
  cisco: <SiCisco title="Cisco" className="text-blue-600 text-2xl" />,
  'tp-link': <SiTplink title="TP-Link" className="text-green-600 text-2xl" />,
  networking: <FaNetworkWired title="Redes" className="text-gray-600 text-2xl" />,
  cable: <FaNetworkWired title="Cableado" className="text-yellow-700 text-2xl" />,
  herramientasred: <FaTools title="Herramientas de Red" className="text-gray-500 text-2xl" />,
  wireshark: <SiWireshark title="Wireshark" className="text-blue-400 text-2xl" />,
};

// Recibe props: exp (experiencia), index, darkMode
const CardExperience = ({ exp, index, darkMode }) => {
  // Soporta tanto string "excel, teamviewer" como array ["excel","teamviewer"]
  const herramientasList = Array.isArray(exp.herramientas)
    ? exp.herramientas
    : (exp.herramientas ? exp.herramientas.split(",") : []);

  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} transform transition-transform hover:-translate-y-2`}
    >
      <div className="flex items-center mb-4 justify-start md:justify-left">
        <div className={`${index % 2 === 0 ? 'md:order-2 md:ml-4' : 'mr-4'}`}>
          <h3 className="text-xl font-bold text-left">{exp.title}</h3>
          <p className="text-green-400 text-left ">{exp.company}</p>
        </div>
        <img
          src={exp.logo}
          alt={exp.company}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <p className="text-sm mb-2 text-left">{exp.period}</p>
      <p className="text-sm text-justify">{exp.description}</p>

      {herramientasList.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-3 items-center">
          {herramientasList.map((herramienta, idx) => {
            const key = herramienta.trim().toLowerCase();
            return (
              <span key={idx} className="flex items-center gap-1">
                {ICON_MAP[key] ? ICON_MAP[key] : (
                  <span className="text-green-400 border border-gray-900 rounded px-2 py-1 font-bold text-sm">
                    {herramienta.trim()}
                  </span>
                )}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardExperience;

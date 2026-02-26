import React from 'react';
import CardAboutMe from '../components/CardAboutMe';
import CardProject from '../components/CardProjects';
import CardHabilities from '../components/CardHabilities';
import CardExperience from '../components/CardExperience';
import CardCertificates from '../components/CardCertificates';
import ContactForm from '../components/ContactForm';

// Importa los íconos
import { FaFileExcel } from 'react-icons/fa';
import { SiTeamviewer, SiHtml5, SiCss3, SiFigma, SiJavascript  } from 'react-icons/si';

// Mapea nombre a ícono
const ICON_MAP = {
    excel: <FaFileExcel title="Excel" className="text-green-700 text-2xl" />,
    teamviewer: <SiTeamviewer title="TeamViewer" className="text-blue-500 text-2xl" />,
    html: <SiHtml5 title="HTML5" className="text-orange-500 text-2xl" />,
    css: <SiCss3 title="CSS3" className="text-blue-600 text-2xl" />,
    figma: <SiFigma title="Figma" className="text-pink-600 text-2xl" />,
    javascript: <SiJavascript title="JavaScript" className="text-yellow-400 text-2xl" />,
};

const EXPERIENCES = [
    {
        title: "Pasante en  analista de soporte técnico",
        company: "Cooperativa de Ahorro y Crédito Mushuc Runa.",
        period: "Enero-Abril 2025 - Presente",
        description: `Apoyo en tareas de soporte técnico, atención a usuarios,
            mantenimiento de equipos y gestión básica de incidencias.
            Desarrollo de habilidades en resolución de problemas y trabajo en equipo.`,
        herramientas: ['excel', 'teamviewer'],
        logo: "/assets/img/mr.jpg"
    },
   {
  title: "Pasante en Redes e Infraestructura",
  company: "Complejo Intercultural y Deportivo Mushuc Runa.",
  period: "Febrero-Marzo 2025 - Presente",
  description: "Colaboración en la instalación y configuración de routers y switches, ponchado de cables de red, pruebas de conectividad y soporte básico en infraestructura de redes.",
  herramientas: "cisco, tp-link, networking, cable, herramientasred",
  logo: "/assets/img/complejo.jpg" // Usa una imagen que tengas o déjala así si no tienes aún
},
    {
        title: "Diseñador en la Gestión de Inventarios UTA",
        company: "Universidad Técnica de Ambato.",
        period: "Marzo-Junio 2024 ",
        description: `Encargado del diseño de esquemas de bases de datos
            y prototipos de interfaz para la plataforma de control de bienes en
            la Universidad Técnica de Ambato de la  Facultad FISEI.`,
        herramientas: ['html', 'css', 'figma', 'javascript'],
        logo: "/assets/img/uta.png"
    }
];

const Home = ({ darkMode }) => {
    return (
        <main className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
            {/* Sección Hero */}
            <section id="inicio" className="relative min-h-screen flex align-content-center pb-20 overflow-hidden" style={{ paddingTop: '10.5rem' }}>
                <div
                    className="absolute inset-0 z-0 opacity-20"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20digital%20technology%20background%20with%20glowing%20particles%20and%20code%20lines%2C%20modern%20tech%20concept%20with%20blue%20and%20green%20gradient%2C%20minimal%20futuristic%20design%2C%20clean%20professional%20look&width=1440&height=800&seq=hero1&orientation=landscape')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 flex justify-center mb-7">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-400 transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src="/assets/img/ac.jpeg"
                                    alt="Desarrollador"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 typewriter">
                                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                    Desarrollador Full Stack
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl mb-8  mx-auto text-justify">
                                Especializado en construir experiencias digitales excepcionales y desarrollar soluciones
                                tecnológicas innovadoras. Apasionado
                                por convertir ideas en código elegante, funcional y eficiente.
                            </p>
                            <div className="flex space-x-4 mb-8">
                                <a
    href="https://wa.me/593967329710"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-3xl whitespace-nowrap bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 cursor-pointer hover:opacity-90 transition-opacity"
>
    Contactar
</a>
                            </div>
                            <div className="flex space-x-4">
                            <a
                             href="https://github.com/AngelCaiza"
                             className="cursor-pointer text-2xl hover:text-green-400 transition-colors"
                             target="_blank"
                             rel="noopener noreferrer"
                                >
                                <i className="fab fa-github"></i>                                </a>
                                <a href="https://www.linkedin.com/in/angel-gabriel-caiza-llanganate-93a671369/" className="cursor-pointer text-2xl hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com/angelgcaiza/" className="cursor-pointer text-2xl hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sección Sobre Mi */}
            <CardAboutMe darkMode={darkMode} />
            {/* Sección Proyectos */}
            <CardProject darkMode={darkMode} />
            {/* Sección de Habilidades */}
            <CardHabilities darkMode={darkMode} />
            {/* Sección de Certificados */}
            <CardCertificates darkMode={darkMode} />
            {/* Sección de Experiencia */}
            <section id="experiencia" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Mi Experiencia</h2>
                    <p className="text-center mb-12 text-lg">Trayectoria profesional y formación académica</p>
                    <div className="relative">
                        {/* Línea vertical */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-400"></div>
                        <div className="space-y-12">
                            {EXPERIENCES.map((exp, index) => (
                                <div key={index} className="relative flex flex-col md:flex-row items-center">
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="md:w-1/2 md:pr-12 md:text-right">
                                                {/* Aquí se usa CardExperience, pero pasamos los íconos */}
                                                <CardExperience exp={exp} index={index} darkMode={darkMode} iconMap={ICON_MAP} />
                                            </div>
                                            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-400 border-4 border-white dark:border-gray-800 z-10"></div>
                                            <div className="md:w-1/2"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="md:w-1/2"></div>
                                            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-400 border-4 border-white dark:border-gray-800 z-10"></div>
                                            <div className="md:w-1/2 md:pl-12 md:text-left">
                                                <CardExperience exp={exp} index={index} darkMode={darkMode} iconMap={ICON_MAP} />
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Sección de Contacto */}
            <ContactForm darkMode={darkMode} />
        </main>
    );
};

export default Home;

import React, { useState } from 'react';

// Modal simple
const Modal = ({ open, onClose, children }) =>
  open ? (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  ) : null;

// Íconos de herramientas
const toolIcons = {
 'php': 'fab fa-php',
  'css': 'fab fa-css3-alt',
  'html': 'fab fa-html5',
  'typescript': 'fab fa-js',
  'js': 'fab fa-js',
  'javascript': 'fab fa-js',
  'nodejs': 'fab fa-node-js',
  'angular': 'fab fa-angular',
  'react': 'fab fa-react',
  'firebase': 'fas fa-fire',
  'mysql': 'fas fa-database',
  'python': 'fab fa-python',
  'java': 'fab fa-java',         // <--- ICONO DE JAVA (FontAwesome 5+)
  'netbeans': 'devicon-netbeans-plain', // <--- ICONO DE NETBEANS (DEVICON)
};

// Proyectos: completa los datos reales de cada uno
const projects = [
  {
    id: 1,
    name: 'Blog',
    cover: '/assets/img/blog.jpg',
    description: 'Proyecto de blog personal desarrollado para compartir artículos, noticias y reflexiones.\
     Permite crear, editar y eliminar publicaciones, categorías y comentarios.',
    contrib: 'Se participó activamente en todas las fases del proyecto, incluyendo el \
    diseño de la interfaz de usuario, \
    la modelación de bases de datos y el desarrollo de las funcionalidades principales.',
    tools: ['php', 'css', 'html'],
    code: 'https://github.com/AngelCaiza/Blog.git',
    screenshots: [
      {
         desc: 'Este Modulo permite subir imagenes .',
        src: '/assets/img/cisco2021.jpg'
      },
      {
        src: '/assets/img/chat.jpg',
        desc: 'Este Modulo permite subir imagenes.'
      },
      
    ]
  },
  {
    id: 2,
    name: 'Chat-Organizacional',
    cover: '/assets/img/chat.jpg',
    description: 'Sistema de chat organizacional para comunicación interna con roles y canales. Permite mensajes en tiempo real usando sockets.',
    contrib: 'Se contribuyó en todas las fases del proyecto, incluyendo la definición de requerimientos, desarrollo de la interfaz de usuario, estructura de la base de datos \
    y lógica de comunicación en tiempo real, garantizando la integración de todos los módulos.',
    tools: ['php', 'css', 'html', 'javascript'],
    code: 'https://github.com/AngelCaiza/Chat-Organizacional.git',
    screenshots: [
      {
        src: '/assets/img/chat-login.jpg',
        desc: 'Inicio de sesión y registro de usuarios.'
      },
      {
        src: '/assets/img/chat-canal.jpg',
        desc: 'Vista de canales y mensajes en tiempo real.'
      }
    ]
  },
  {
    id: 3,
    name: 'Gestion-de-Inventarios',
    cover: '/assets/img/gestionInvn.jpg',
    description: 'Sistema de gestión de inventarios para la Universidad Técnica de Ambato. Administra bienes y mobiliario, con control eficiente y reportes.',
    contrib: 'Encargado del diseño de la interfaz de usuario, aplicando criterios de usabilidad y coherencia \
    visual para optimizar la experiencia de los usuarios en la gestión de inventarios.',
    tools: ['typescript', 'html', 'angular', 'css', 'nodejs', 'js'],
    code: 'https://github.com/AngelCaiza/Gestion-de-Inventarios.git',
    screenshots: [
      {
        src: '/assets/img/gestionInvn-panel.jpg',
        desc: 'Panel principal de gestión de inventarios.'
      },
      {
        src: '/assets/img/gestionInvn-reportes.jpg',
        desc: 'Módulo de reportes y estadísticas.'
      }
    ]
  },
  {
    id: 4,
    name: 'Simulador-Banco',
    cover: '/assets/img/banco.jpg',
    description: 'Simulador de operaciones bancarias para educación financiera. Permite crear cuentas, realizar transferencias y manejar historial de operaciones.',
    contrib: 'Responsable del diseño de la interfaz de usuario y la creación de la base de \
    datos, priorizando tanto la usabilidad como la eficiencia del sistema.',
    tools: ['angular', 'html', 'css'],
    code: 'https://github.com/AngelCaiza/Simulador-Banco.git',
    screenshots: [
      {
        src: '/assets/img/banco-login.jpg',
        desc: 'Pantalla de acceso al simulador bancario.'
      },
      {
        src: '/assets/img/banco-movimientos.jpg',
        desc: 'Vista de historial de movimientos y transferencias.'
      }
    ]
  },
  {
    id: 5,
    name: 'Gestion-de-Ventas',
    cover: '/assets/img/ventas.jpg',
    description: 'Sistema web para gestión de ventas, control de stock, facturación y reportes en tiempo real.',
    contrib: 'Participación integral en el desarrollo del sistema, \
    abarcando diseño de interfaz, base de datos y funcionalidades principales.',
    tools: ['java', 'mysql', 'css', 'html'],
    code: 'https://github.com/AngelCaiza/Gestion-de-Ventas.git',
    screenshots: [
      {
        src: '/assets/img/ventas-dashboard.jpg',
        desc: 'Dashboard de ventas y facturación.'
      },
      {
        src: '/assets/img/ventas-reporte.jpg',
        desc: 'Reporte gráfico de ventas mensuales.'
      }
    ]
  }
];
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const CardProject = ({ darkMode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  return (
    <section id="proyectos" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Mis Proyectos
        </h2>
        <p className="text-center mb-12 text-lg">
          Una sección de mis proyectos más destacados
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className={`overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
            >
              {/* Imagen de portada */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.cover}
                  alt={`Imagen de ${project.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name.replace(/-/g, ' ')}</h3>
                <p className="mb-4 text-sm">{project.description}</p>
                <h4 className="text-blank-500 font-bold mb-1">Contribución</h4>
                <p className="mb-4 text-sm">{project.contrib}</p>
                {/* Herramientas */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className={`flex items-center px-2 py-1 rounded font-bold gap-1
                        ${darkMode ? 'bg-gray-800 text-green-300 border border-gray-700' : 'bg-green-50 text-green-700 border border-green-200'}
                      `}
                    >
                      <i className={`${toolIcons[tool.toLowerCase()] || ''} text-lg`}></i>
                    {/*<span className="text-xs">{capitalize(tool)}</span>*/}
                    {/* Quitar o  onservar  toUpperCase()*/}
                    </span>
                  ))}
                </div>
                {/* Lenguaje principal y topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.language && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}
                    >
                      {project.language}
                    </span>
                  )}
                  {project.topics &&
                    project.topics.map((topic, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode
                            ? 'bg-green-900 text-green-300'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                </div>
                {/* Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.code}
                    className="whitespace-nowrap text-sm flex items-center cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-code mr-1"></i> Código
                  </a>
                  {/* Ver más: modal */}
                 
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="whitespace-nowrap text-sm flex items-center cursor-pointer text-indigo-500 hover:text-indigo-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {modalProject && (
          <>
            <h3 className="text-xl font-bold mb-4">{modalProject.name.replace(/-/g, ' ')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(modalProject.screenshots || []).map((shot, i) => (
                <div key={i} className="flex flex-col items-center">
                  <img src={shot.src} alt={shot.desc} className="rounded shadow mb-2 max-h-40 object-contain" />
                  <span className="text-sm text-center">{shot.desc}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default CardProject;

const Footer = ({ darkMode }) => {
    return (
        <footer className="py-8 bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            Angel Caiza
                        </h3>
                        <p className="mb-4 text-gray-300">
                            Desarrollador Full Stack especializado en crear experiencias digitales excepcionales y soluciones tecnológicas innovadoras.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/AngelCaiza" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer"target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/angel-gabriel-caiza-llanganate-93a671369/" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com/angelgcaiza/" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer" target="_blank"rel="noopener noreferrer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#inicio" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">Inicio</a>
                            </li>
                            <li>
                                <a href="#sobre-mi" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">Sobre mi</a>
                            </li>
                            <li>
                                <a href="#proyectos" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">Proyectos</a>
                            </li>
                            <li>
                                <a href="#habilidades" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">Habilidades</a>
                            </li>
                            <li>
                                <a href="#certificados" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">Certificados</a>
                            </li>
                            <li>
                                <a href="#experiencia" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">Experiencia</a>
                            </li>
                            <li>
                                <a href="#contacto" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Servicios</h4>
                        <ul className="space-y-2">
                            <li>
                                <button type="button" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                                    Desarrollo Web
                                </button>
                            </li>
                            <li>
                                <button type="button" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                                    Desarrollo Móvil
                                </button>
                            </li>
                            <li>
                                <button type="button" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                                    Diseño UI/UX
                                </button>
                            </li>
                            <li>
                                <button type="button" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                                    Consultoría Técnica
                                </button>
                            </li>
                            <li>
                                <button type="button" className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                                    Mantenimiento Web
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-300 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Angel Caiza. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-4 text-sm text-gray-300">
                        <button type="button" className="hover:text-green-400 transition-colors cursor-pointer">
                            Política de Privacidad
                        </button>
                        <button type="button" className="hover:text-green-400 transition-colors cursor-pointer">
                            Términos de Servicio
                        </button>
                        <button type="button" className="hover:text-green-400 transition-colors cursor-pointer">
                            Cookies
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React, { useState, useEffect } from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('inicio');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showCVModal, setShowCVModal] = useState(false);

    const sections = ['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'certificados', 'experiencia', 'contacto'];

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const currentScroll = window.scrollY;
            const progress = (currentScroll / totalScroll) * 100;
            setScrollProgress(progress);

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
            <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 z-50" style={{ width: `${scrollProgress}%` }}></div>
            <header className={`fixed w-full ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md z-40 transition-colors duration-300`}>
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            Angel Caiza
                        </h1>
                    </div>
                    {/* Navegación Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`cursor-pointer whitespace-nowrap capitalize hover:text-green-400 transition-colors ${activeSection === section ? 'text-green-400 font-semibold' : ''}`}
                            >
                                {section}
                            </button>
                        ))}
                        <button
                            className="whitespace-nowrap rounded-3xl bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setShowCVModal(true)}
                        >
                            Descargar CV
                        </button>
                        <button
                            onClick={toggleDarkMode}
                            className="!rounded-button whitespace-nowrap cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                        >
                            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
                        </button>
                    </nav>
                    {/* Menú Hamburguesa para Móvil */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleDarkMode}
                            className="!rounded-button whitespace-nowrap cursor-pointer p-2 mr-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                        >
                            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="!rounded-button whitespace-nowrap cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
                {/* Menú Móvil */}
                {isMenuOpen && (
                    <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-4 px-4 transition-all duration-300`}>
                        <div className="flex flex-col space-y-4">
                            {sections.map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`cursor-pointer whitespace-nowrap capitalize hover:text-green-400 transition-colors ${activeSection === section ? 'text-green-400 font-semibold' : ''}`}
                                >
                                    {section}
                                </button>
                            ))}
                            <button
                                className="!rounded-button whitespace-nowrap bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 text-center cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => setShowCVModal(true)}
                            >
                                Descargar CV
                            </button>
                        </div>
                    </div>
                )}
            </header>
            {/* Modal para mostrar el CV */}
            {showCVModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full relative">
                        <button
                            className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 text-2xl"
                            onClick={() => setShowCVModal(false)}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-4 text-center">CV Angel Caiza</h2>
                        <iframe
                            src="/curriculum.pdf"
                            title="CV Preview"
                            className="w-full h-96 border rounded"
                        ></iframe>
                        <div className="flex justify-center mt-4">
                           
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
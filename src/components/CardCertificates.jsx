import React from 'react';

const CardCertificates = ({ darkMode }) => {
    const certificates = [
        {
            title: "Fundamentos de Python 2",
            institution: "CISCO NETACAD",
            date: "2025",
            image: "/assets/img/python.jpg",
            url: "https://drive.google.com/file/d/1P-SIw9fNrDj9rriBqfY_tOHbE8hDImHt/view?usp=sharing"
        },
        {
            title: "Essencial JavaScript 2",
            institution: "CISCO NETACAD",
            date: "2025",
            image: "/assets/img/javascript.jpg",
            url: "https://drive.google.com/file/d/15y-TDMnchbI222a0ck2_r8wbiOnpoUyS/view?usp=sharing"
        },
        {
            title: "Conference on Computer, Science, Electronics and Industrial Engineering",
            institution: "CSEI",
            date: "2024",
            image: "/assets/img/csei2024.jpg",
            url: "https://drive.google.com/file/d/1ejOFDR9q-Q3M-lGBJucqVuIMmYZxWtBq/view?usp=sharing"
        },
        {
            title: "CCNAv7: Introducción a Redes",
            institution: "CISCO NETACAD",
            date: "2024",
            image: "/assets/img/cisco2021.jpg",
            url: "https://drive.google.com/file/d/1u7ycGjFYIZxp4Mp-XkIfjm4jUY9KnRTf/view?usp=sharing"
        },
        {
            title: "CCNAv7: Introduction to Networks v7.02 (INT)",
            institution: "UNIVERSIDAD TÉCNICA DE AMBATO",
            date: "2024",
            image: "/assets/img/uta2021.jpg",
            url: "https://drive.google.com/file/d/1KxXCCgIj9dz1HIW8gDmj5daZLoAD7jFN/view?usp=sharing"
        },
        {
            title: "Conference on Computer, Science, Electronics and Industrial Engineering",
            institution: "CSEI",
            date: "2021",
            image: "/assets/img/cseo2021.jpg",
            url: "https://drive.google.com/file/d/1DSe-eC3o-iya4s4gaT88SmRYkUkJzLJr/view?usp=sharing"
        }
    ];

    return (
        <div id="certificados" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Certificados</h2>
                <p className="text-center mb-12 text-lg">Formación y certificaciones profesionales</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className={`rounded-xl p-4 shadow-lg hover:shadow-xl transition duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                        >
                            {cert.url ? (
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block group overflow-hidden rounded-md"
                                >
                                    <img
                                        src={cert.image}
                                        alt={`Certificado de ${cert.title}`}
                                        className="w-full h-48 object-cover rounded-md transform group-hover:scale-105 transition duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                                        <span className="text-lime-400 text-lg font-semibold shadow-md drop-shadow-lg">
                                            Ver certificado
                                        </span>
                                    </div>
                                </a>
                            ) : (
                                <div className="relative block overflow-hidden rounded-md">
                                    <img
                                        src={cert.image}
                                        alt={`Certificado de ${cert.title}`}
                                        className="w-full h-48 object-cover rounded-md"
                                    />
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-center mt-4">{cert.title}</h3>
                            <p className="text-xl font-bold text-center mt-2">{cert.institution}</p>
                            <p className="text-xl font-bold text-center mt-1">{cert.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardCertificates;

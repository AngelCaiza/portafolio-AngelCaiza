import React from 'react';

const CardAboutMe = ({ darkMode }) => {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-300">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20software%20developer%20working%20in%20modern%20office%20environment%2C%20casual%20smart%20attire%2C%20sitting%20at%20desk%20with%20multiple%20monitors%2C%20warm%20lighting%2C%20creative%20workspace%20with%20plants%20and%20modern%20decor&width=800&height=1000&seq=about1&orientation=portrait"
                alt="Sobre Mi"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=Close%20up%20of%20hands%20coding%20on%20laptop%20keyboard%20in%20modern%20workspace%2C%20with%20soft%20ambient%20lighting%2C%20showing%20programming%20code%20on%20screen&width=400&height=400&seq=about2&orientation=squarish"
                alt="Coding"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mi</h2>
            <p className="text-lg mb-6 text-justify" >
               Soy un apasionado desarrollador Full Stack con habilidades tanto en Frontend como Backend.
Me encanta crear soluciones eficientes y visuales utilizando tecnologías como React.js, Angular, Node.js y PHP.
Siempre estoy en busca de nuevos desafíos que me ayuden a crecer profesional y personalmente.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: "fas fa-code", title: "Desarrollo Web", subtitle: "Frontend y Backend" },
          
                { icon: "fas fa-paint-brush", title: "UI/UX Design", subtitle: "Diseño Creativo" },
               
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center text-white">
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "Ingeniero en Desarrollo de Software.",
                 "Graduado como Ingeniero en desarrollo de software en la Universidad Técnica de Ambato.",
                "Apasionado por el código limpio y las buenas prácticas.",
                "Aprendiendo algo nuevo cada día."
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardAboutMe;

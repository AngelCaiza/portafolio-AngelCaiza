import * as echarts from 'echarts';
import React, { useRef, useEffect, useState } from "react";

const CardHabilities = ({ darkMode }) => {
  useEffect(() => {
    const chartDom = document.getElementById('skills-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: 'Frontend', max: 100 },
            { name: 'Backend', max: 100 },
            { name: 'Bases de Datos', max: 100 },
            { name: 'Hosting', max: 100 },
          ],
          radius: 130,
          axisName: {
            color: darkMode ? '#ffffff' : '#333333',
            fontSize: 14
          }
        },
        series: [{
          name: 'Habilidades',
          type: 'radar',
          data: [
            {
              value: [90, 85, 80, 70],
              name: 'Nivel de Habilidad',
              areaStyle: { color: 'rgba(0, 255, 148, 0.4)' },
              lineStyle: { color: '#00FF94' },
              itemStyle: { color: '#00FF94' }
            }
          ]
        }],
        textStyle: { color: darkMode ? '#ffffff' : '#333333' }
      };
      myChart.setOption(option);
      window.addEventListener('resize', () => myChart.resize());
    }
  }, [darkMode]);

  // Ajusta aquí el nivel de cada herramienta
  const skillsCategories = [
    {
      name: "Frontend",
      skills: [
        { skill: "HTML/CSS", level: "Alto" },
        { skill: "JavaScript", level: "Alto" },
        { skill: "React", level: "Medio" },
        { skill: "Angular", level: "Medio" }
      ]
    },
    {
      name: "Backend",
      skills: [
        { skill: "Node.js", level: "Alto" },
        { skill: "Python", level: "Alto" },
        { skill: "PHP", level: "Medio" },
        { skill: "Java", level: "Medio" }
      ]
    },
    {
      name: "Bases de Datos",
      skills: [
        { skill: "SQL Server", level: "Alto" },
        { skill: "MySQL", level: "Alto" },
        { skill: "Firebase", level: "Medio" }
      ]
    },
    {
      name: "Hosting",
      skills: [
        { skill: "000webhost", level: "Alto" },
        { skill: "Heroku", level: "Alto" }
      ]
    }
  ];

  const otherTechnologies = [
    { icon: "fab fa-react", name: "React" },
    { icon: "fab fa-node-js", name: "Node.js" },
    { icon: "fab fa-angular", name: "Angular" },
    { icon: "fab fa-js", name: "JavaScript" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fab fa-php", name: "PHP" },
    { icon: "fab fa-java", name: "Java" },
    { icon: "fab fa-aws", name: "AWS" },
    { icon: "fab fa-github", name: "GitHub" },
    { icon: "fab fa-wordpress", name: "WordPress" }
  ];

  // Colores para el nivel
  const levelClass = (level) => {
    switch (level) {
      case "Alto":
        return "bg-green-200 text-green-700";
      case "Medio":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-red-100 text-red-700";
    }
  };

  // Barra de nivel (puedes cambiar estos valores para personalizar cada skill)
  const valueByLevel = (level) => {
    if (level === "Alto") return 90;
    if (level === "Medio") return 70;
    return 45;
  };

  // ---- Carrusel infinito fluido ----
  const scrollRef = useRef();
  const containerRef = useRef();
  const reqRef = useRef();
  const [repeatCount, setRepeatCount] = useState(2);

  useEffect(() => {
    // Calcula cuántas repeticiones necesitas para cubrir el carrusel
    const checkRepeats = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      // Crea un div temporal para medir el ancho real de las tarjetas
      const temp = document.createElement("div");
      temp.style.display = "flex";
      temp.style.visibility = "hidden";
      temp.style.position = "absolute";
      temp.style.left = "-9999px";
      otherTechnologies.forEach((tech) => {
        const item = document.createElement("div");
        item.className = "min-w-[100px] p-4";
        item.innerText = tech.name;
        temp.appendChild(item);
      });
      document.body.appendChild(temp);
      const totalWidth = temp.offsetWidth;
      document.body.removeChild(temp);
      // Repite suficiente para llenar 2 veces el carrusel
      let count = Math.ceil((containerWidth * 2) / totalWidth);
      if (count < 2) count = 2; // mínimo 2
      setRepeatCount(count);
    };

    checkRepeats();
    window.addEventListener("resize", checkRepeats);
    return () => window.removeEventListener("resize", checkRepeats);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let pos = 0;
    const speed = 1;
    // Calcula el ancho de la mitad (el set original)
    const setWidth = el.scrollWidth / repeatCount;

    function animate() {
      pos -= speed;
      if (Math.abs(pos) >= setWidth) {
        pos = 0;
      }
      el.style.transform = `translateX(${pos}px)`;
      reqRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(reqRef.current);
  }, [repeatCount]);

  // Duplicar el array según lo calculado
  const items = Array(repeatCount)
    .fill(otherTechnologies)
    .flat();

  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Mis Habilidades
        </h2>
        <p className="text-center mb-12 text-lg">
          Tecnologías y herramientas que domino
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gráfico Radar */}
          <div className="flex justify-center items-center">
            <div id="skills-chart" className="w-full h-80"></div>
          </div>

          {/* Barras de habilidad */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {skillsCategories.map((category, catIdx) => (
                <div
                  key={catIdx}
                  className={`p-6 rounded-lg ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-4 text-green-400">
                    {category.name}
                  </h3>
                  <ul className="space-y-0.25">
  {category.skills.map((obj, i) => (
    <li key={i}>
     <span translate="no">{obj.skill}</span>
      <div className="flex items-center mt-1">
        <div className={`h-2 flex-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500"
            style={{ width: `${valueByLevel(obj.level)}%` }}
          />
        </div>
        <span className={`ml-3 text-xs px-2 py-0.5 rounded font-bold ${levelClass(obj.level)}`}>
          {obj.level}
        </span>
      </div>
    </li>
  ))}
</ul>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Otras tecnologías animadas tipo carrusel */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Otras Tecnologías
          </h3>
          <div ref={containerRef} className="overflow-hidden relative w-full h-28">
            <div
              ref={scrollRef}
              className="flex gap-6 absolute left-0 top-0"
              style={{ minWidth: "max-content" }}
            >
              {items.map((tech, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center p-4 rounded-lg ${
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  } hover:shadow-lg transition-shadow cursor-pointer min-w-[100px]`}
                  style={{ width: 100 }}
                >
                  <i className={`${tech.icon} text-4xl mb-2 text-green-400`}></i>
                  <span className="text-sm" translate="no">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHabilities;

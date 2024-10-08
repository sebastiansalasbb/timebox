import React, { useState, useEffect } from "react";

function App() {
  // Estados para cada sección
  const [topTasks, setTopTasks] = useState(["", "", ""]);
  const [secondaryTasks, setSecondaryTasks] = useState(["", "", ""]);
  const [brainDump, setBrainDump] = useState("");

  // Al cargar el componente, recupera los datos de localStorage si existen
  useEffect(() => {
    const savedTopTasks = JSON.parse(localStorage.getItem("topTasks"));
    const savedSecondaryTasks = JSON.parse(localStorage.getItem("secondaryTasks"));
    const savedBrainDump = localStorage.getItem("brainDump");

    if (savedTopTasks) setTopTasks(savedTopTasks);
    if (savedSecondaryTasks) setSecondaryTasks(savedSecondaryTasks);
    if (savedBrainDump) setBrainDump(savedBrainDump);
  }, []);

  // Cada vez que cambie topTasks, secondaryTasks o brainDump, guarda los valores en localStorage
  useEffect(() => {
    localStorage.setItem("topTasks", JSON.stringify(topTasks));
    localStorage.setItem("secondaryTasks", JSON.stringify(secondaryTasks));
    localStorage.setItem("brainDump", brainDump);
  }, [topTasks, secondaryTasks, brainDump]);

  // Funciones para manejar el cambio en los inputs
  const handleTopTaskChange = (index, value) => {
    const updatedTasks = [...topTasks];
    updatedTasks[index] = value;
    setTopTasks(updatedTasks);
  };

  const handleSecondaryTaskChange = (index, value) => {
    const updatedTasks = [...secondaryTasks];
    updatedTasks[index] = value;
    setSecondaryTasks(updatedTasks);
  };

  const handleBrainDumpChange = (event) => {
    setBrainDump(event.target.value);
  };

  return (
    <div className="container text-bg-dark">
      <h1 className="mt-5">Time Box</h1>
      <hr className="mb-5" />

      <div>
        <div>
          <div className="mb-5">
            <h2>Top 3</h2>
            <ol>
              {topTasks.map((task, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => handleTopTaskChange(index, e.target.value)}
                  />
                </li>
              ))}
            </ol>
            <hr />
          </div>

          <div className="mb-5">
            <h2>Secondary Tasks</h2>
            <ol>
              {secondaryTasks.map((task, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => handleSecondaryTaskChange(index, e.target.value)}
                  />
                </li>
              ))}
            </ol>
            <hr />
          </div>

          <div className="mb-5">
            <h2>Brain Dump</h2>
            <textarea
              rows="10"
              value={brainDump}
              onChange={handleBrainDumpChange}
            ></textarea>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

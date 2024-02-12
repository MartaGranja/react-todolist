import { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  const nuevaTarea = () => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, {tarea}]);
      setTarea("");
    }
  };

  const eliminaTarea = (id) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(id, 1);
    setTareas(nuevasTareas);
  };

   

  return (
    <div className="grid grid-cols-2 gap-10 p-4 w-1/2 mx-auto bg-gray-100 my-10 rounded-lg">
      <div id="columna1" className="border border-gray-300 border-t-0 border-l-0 border-r-1 border-b-0 p-3">
        <form className="mb-4">

          <label className="text-xl font-bold block mb-3">Tarea</label>

          <input
            className="bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}/>
            

          <button
            type="button"
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={nuevaTarea}>Enviar</button>

        </form>
      </div>


      <div id="columna2" className="p-3">

        <h1 className="text-xl font-bold mt-1 mb-2">Lista de tareas</h1>

        <ul>
          {tareas.map((t, index) => (
            <li key={index} className={"mb-2 flex justify-between items-center bg-sky-100 p-2 rounded"}>
              {t.tarea}

              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                onClick={() => eliminaTarea(index)}
              >
                Eliminar
              </button>

            </li>
          ))}

        </ul>

      </div>
    </div>
  );
}

export default App;

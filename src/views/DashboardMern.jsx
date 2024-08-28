export default function Home() {

  return (
    <>
      <div className='mt-8 flex justify-center items-end text-center mx-4'>
        <div>
          <p className="mb-4 font-bold underline">Desarrollo FullStack JS</p>
          <p className="mb-6">
            A continuación un pequeño proyecto utilizando el stack tecnológico MERN,
            donde se puede ver un ejemplo de CRUD (Crear, Leer, Actualizar, Eliminar).
          </p>
          <p className="mb-4">Procesando datos del "producto"</p>
        </div>
      </div>


      <div className="flex justify-center">
        <table className="border-collapse border border-slate-500 text-xs md:text-base">
          <thead className="bg-gray-300">
            <tr>
              <th className="border border-slate-600">Ver Proyecto</th>
              <th className="border border-slate-600">Github FrontEnd</th>
              <th className="border border-slate-600">Github BackEnd</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700">
                <a href='https://front-registrar.vercel.app/' className="mx-2">
                  Registrar
                </a>
              </td>
              <td className="border border-slate-700">
                <a href='https://github.com/jjwernerm/front-registrar' className="mx-2">
                  front-registrar
                </a>
              </td>
              <td className="border border-slate-700">
                <a href='https://github.com/jjwernerm/back-registrar' className="mx-2">
                  back-registrar
                </a>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700">
                <a href='https://front-mostrar.vercel.app/' className="mx-2">
                  Mostrar Lista
                </a>
              </td>
              <td className="border border-slate-700">
                <a href='https://github.com/jjwernerm/front-mostrar' className="mx-2">
                  front-mostrar
                </a>
              </td>
              <td className="border border-slate-700">
                <a href='https://github.com/jjwernerm/back-mostrar' className="mx-2">
                  back-mostrar
                </a>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700">
                <a href='https://front-consultar.vercel.app/' className="mx-2">
                  Consultar
                </a>
              </td>
              <td className="border border-slate-700">
                <a href='https://github.com/jjwernerm/front-consultar' className="mx-2">
                  front-consultar
                </a>
              </td>
              <td className="border border-slate-700">
                <a href='https://github.com/jjwernerm/back-consultar' className="mx-2">
                  back-consultar
                </a>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700">
                <a href='https://front-editar.vercel.app/' className="mx-2">
                  Editar
                </a>
              </td>
              <td className="border border-slate-700">
                <a href='https://github.com/jjwernerm/front-editar' className="mx-2">
                  front-editar
                </a>
              </td>
              <td className="border border-slate-700">
                <a href='https://github.com/jjwernerm/back-editar' className="mx-2">
                  back-editar
                </a>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700">
                <a href='https://front-eliminar.vercel.app/' className="mx-2">
                  Eliminar
                </a>
              </td>
              <td className="border border-slate-700">
                <a href='https://github.com/jjwernerm/front-eliminar' className="mx-2">
                  front-eliminar
                </a>
              </td>
              <td className="border border-slate-700">
                <a href='https://github.com/jjwernerm/back-eliminar' className="mx-2">
                  back-eliminar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mx-4 text-xs md:text-base font-bold italic">*Haz clic en la celda para ver el proyecto</p>





      <div className="text-center my-4">
        <a href='https://joannywerner.com/' className="font-bold underline mx-2">
          joannywerner.com
        </a>
      </div>
    </>
  );
};
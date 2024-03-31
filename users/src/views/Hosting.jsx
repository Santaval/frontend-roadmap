import React from 'react';

export default function Hosting() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <div>
          <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
            Alojamiento y mantenimiento web
          </p>
        </div>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='7e5e8ff8-1960-4094-a63a-2a0c0f922d69'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)'
                width='52'
                height='24'
              />
            </svg>
            Precios
          </span>{' '}
          según las necesidades de tu{' '}
          <span className='relative text-primary'> Web App</span>
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Elije el plan que mejor se adapte a tus necesidades y comienza a
          disfrutar de los beneficios de tener tu app web en la nube sin
          preocuparte por el mantenimiento.
        </p>
      </div>
      <div className='grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto'>
        <div className='flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow'>
          <div className='text-center'>
            <div className='text-lg font-semibold'>Static</div>
            <div className='flex items-center justify-center mt-2'>
              <div className='mr-1 text-5xl font-bold'>$7</div>
              <div className='text-gray-700'>/ mes</div>
            </div>
            <div className='mt-2 space-y-3'>
              <div className='text-gray-700'>Sitio web estático</div>
              <div className='text-gray-700'>Hosting web</div>
              <div className='text-gray-700'>Soporte 24/7</div>
              <div className='text-danger'>
                <span className='font-bold'>x</span> Mantenimiento
              </div>
            </div>
          </div>
          <div>
            <a
              href='mailto:contact@savaldev.com'
              className='inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none'
            >
              Obtener
            </a>
            <p className='max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto'>
              Ideal para blogs, sitios web personales y proyectos pequeños.
            </p>
          </div>
        </div>
        <div className='relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400'>
          <div className='text-center'>
            <div className='text-lg font-semibold'>Medium Web App</div>
            <div className='flex items-center justify-center mt-2'>
              <div className='mr-1 text-5xl font-bold'>$60</div>
              <div className='text-gray-700'>/ mes</div>
            </div>
            <div className='mt-2 space-y-3'>
              <div className='text-gray-700'>Hosting web</div>
              <div className='text-gray-700'>Servidor dedicado</div>
              <div className='text-gray-700'>Base de datos dedicada</div>
              <div className='text-gray-700'>Soporte 24/7</div>
              <div>Mantenimiento</div>
            </div>
          </div>
          <div>
            <a
             href='mailto:contact@savaldev.com'
              className='inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-primary'
            >
              Obtener
            </a>
            <p className='max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto'>
              Ideal para apps webs medianas con un flujo de usuarios moderado.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow'>
          <div className='text-center'>
            <div className='text-lg font-semibold'>Big Web App</div>
            <div className='flex items-center justify-center mt-2'>
              <div className='mr-1 text-5xl font-bold'>$150</div>
              <div className='text-gray-700'>/ mo</div>
            </div>
            <div className='mt-2 space-y-3'>
              <div className='text-gray-700'>Hosting web</div>
              <div className='text-gray-700'>Servidor dedicado</div>
              <div className='text-gray-700'>Base de datos dedicada</div>
              <div className='text-gray-700'>Dominio gratis</div>
              <div className='text-gray-700'>Múltiples sitios</div>
              <div className='text-gray-700'>Soporte 24/7</div>
              <div>Mantenimiento</div>
            </div>
          </div>
          <div>
            <a
              href='mailto:contact@savaldev.com'
              className='inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none'
            >
              Obtener
            </a>
            <p className='max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto'>
                Ideal para empresas con múltiples apps web y alto flujo de
                usuarios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'

function Footer() {
  return (
    <footer className="mt-24 px-12 py-8  flex items-center justify-around bg-slate-100">
    <div>
      <h6 className="font-semibold text-sm ">Contacto</h6>
      <ul>
        <li className="text-gray-500 text-xs">contact@savaldev.com</li>
      </ul>
    </div>

    <div>
      <span className="text-gray-500 text-xs">
        Savaldev &copy; 2023
      </span>
    </div>
  </footer>
  )
}

export default Footer
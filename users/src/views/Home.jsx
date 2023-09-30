import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <section id="inicio" className='flex items-center justify-center h-screen'>
         <div>
         <h1 className='bold dark:text-white text-8xl primary-txt'>
            Savaldev
            <span className='text-primary'>
                . 
            </span>
        </h1>

        <p className='dark:text-gray-500'>
            Desarrollo web | De tu idea a la realidad 
        </p>
         </div>
      </section>
    )
  }
}

export default Home
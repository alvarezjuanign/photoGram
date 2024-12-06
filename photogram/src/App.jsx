import message from './assets/message.svg'
import heart from './assets/heart.svg'

import { Navbar } from './components/Navbar'

export function App() {
  return (
    <>
      <nav className='flex justify-between'>
        <h1 className='text-2xl m-1'>PhotoGram</h1>
        <div className='flex mx-3 gap-2'>
          <a href='/notificaciones' className='mt-1'>
            <img src={heart} alt='' className='w-6 cursor-pointer' />
          </a>
          <a href='/mensajes' className='mt-1'>
            <img src={message} alt='' className='w-6 cursor-pointer' />
          </a>
        </div>
      </nav>
      <main>
        <h2 className='text-2xl m-1'>Fotos</h2>
        <Navbar />
      </main>
    </>
  )
}
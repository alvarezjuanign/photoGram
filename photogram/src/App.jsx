import message from './assets/message.svg'
import heart from './assets/heart.svg'

import { Historias } from './components/Historias'
import { Navbar } from './components/Navbar'
import { Posts } from './components/Posts'

export function App() {
  return (
    <main className='flex flex-col h-screen'>
      <nav className='flex justify-between'>
        <h1 className='text-2xl m-1'>PhotoGram</h1>
        <div className='flex mx-3 gap-2'>
          <a href='/notificaciones' className='mt-1'>
            <img src={heart} alt='Icono de notificaciones' className='w-6 cursor-pointer' />
          </a>
          <a href='/mensajes' className='mt-1'>
            <img src={message} alt='Icono de mensajes' className='w-6 cursor-pointer' />
          </a>
        </div>
      </nav>
      <section>
        <Historias />
        <Posts />
        <Navbar />
      </section>
    </main>
  )
}
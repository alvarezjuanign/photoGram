import plus from '../assets/plus.svg'
import home from '../assets/home.svg'
import glass from '../assets/glass.svg'
import reel from '../assets/reel.svg'

export function Navbar() {
  return (
    <section className='fixed bottom-0 w-full bg-white'>
      <nav>
        <ul className='flex justify-around items-center h-10'>
          <li>
            <a href='#'><img src={home} alt='Icono home' className='h-5' /></a>
          </li>
          <li>
            <a href='#'><img src={glass} alt='Icono buscador' className='h-5' /></a>
          </li>
          <li>
            <a href='#'><img src={plus} alt='Icono crear' className='h-5' /></a>
          </li>
          <li>
            <a href='#'><img src={reel} alt='Icono reel' className='h-5' /></a>
          </li>
          <li>
            <a href='./perfil'>
              <img
                src='https://i.pravatar.cc/150?img=11'
                alt='Foto de perfil de usuario'
                className='rounded-full h-5 border'
              />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
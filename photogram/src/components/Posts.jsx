import message from '../assets/message.svg'
import send from '../assets/send.svg'
import fav from '../assets/fav.svg'
import heart from '../assets/heart.svg'

export function Posts() {
  return (
    <section>
      <ul>
        <li className='mb-5'>
          <header className='flex items-center ml-2 mb-2'>
            <img
              src='https://i.pravatar.cc/150?img=11'
              alt='Avatar de usuario'
              className='h-10 w-10 rounded-full'
            />
            <div className='ml-2'>
              <a className='font-bold text-sm'></a>
              <p className='text-sm text-gray-500'></p>
            </div>
          </header>
          <img
            src='https://picsum.photos/id/128/1920/1080'
            alt='Post del usuario'
            className='w-full object-cover aspect-square'
          />
          <section className='bg-white h-6 flex justify-between mt-2 mx-1'>
            <div>
              <ul className='flex'>
                <li className='flex mx-1'>
                  <img src={heart} alt='Icono me gusta' className='h-5' />
                  <p className='text-sm'></p>
                </li>
                <li className='flex mx-1'>
                  <img src={message} alt='Icono comentario' className='h-5 mr-1' />
                  <p className='text-sm'></p>
                </li>
                <li className='flex mx-1'>
                  <img src={send} alt='Icono enviar' className='h-5 mr-1' />
                  <p className='text-sm'></p>
                </li>
              </ul>
            </div>
            <div>
              <img src={fav} alt='Icono favorito' className='h-5 mr-1' />
            </div>
          </section>
          <article>
            <p className='text-wrap ml-2 text-sm'>
              <a className='font-bold' href='#'>
              </a>
            </p>
          </article>
          <p className='text-sm ml-2 text-gray-500'></p>
        </li>
      </ul>
    </section >
  )
}

import plus from '../assets/plus.svg'
import data from '../mockups/data.json'
import { useState } from 'react'

export function Historias() {
  const [showModal, setShowModal] = useState(false)
  const [src, setSrc] = useState('')
  const [id, setId] = useState(0)

  const historiaVista = (e) => {
    e.preventDefault()
    const historia = e.target
    const usuario = historia.id

    if (historia.classList.contains('border-red-500')) {
      historia.classList.remove('border-red-500')
    }

    setSrc(data.users[usuario - 1].stories[0].media)
    setId(data.users[usuario - 1].id - 1)
    setShowModal(true)

    setTimeout(() => {
      setShowModal(false)
    }, 2000)

  }

  return (
    <>
      <section className='px-2 overflow-x-scroll h-24 m-1'>
        <ul className='flex gap-20 relative'>
          <li>
            <img
              src='https://i.pravatar.cc/150?img=11'
              alt='imagen de usuario'
              className='rounded-full absolute h-16 border-4 cursor-pointer'
            />
            <div
              className='w-6 h-6 flex justify-center items-center rounded-full bg-blue-500 relative top-10 left-10'
            >
              <img src={plus} alt='Icono crear' className='w-4' />
            </div>
          </li>
          {
            data.users.map((usuario) => (
              usuario.stories.length > 0 &&
              <li key={usuario.id} onClick={historiaVista}>
                <img
                  id={usuario.id}
                  src={usuario.profilePicture}
                  alt={usuario.username}
                  className='rounded-full absolute h-16 border-4 border-red-500 cursor-pointer'
                />
              </li>
            ))
          }
        </ul>
        <dialog className='w-screen absolute z-50 top-0 h-screen outline-none box-border aspect-video' open={showModal}>
          <div className='modal-box h-full w-full'>
            <div className='flex items-center absolute w-full p-2'>
              <img
                src={data.users[id].profilePicture}
                alt="Foto de perfil de usuario"
                className='h-9 w-9 rounded-full' />
              <p className='ml-2 font-bold text-white'>{data.users[id].username}</p>
            </div>
            <img
              src={src}
              className='h-full object-cover'
              alt='imagen usuario'
            />
          </div>
        </dialog>
      </section>
    </>
  )
}
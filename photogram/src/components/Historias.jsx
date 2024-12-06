import plus from '../assets/plus.svg'
import data from '../mockups/data.json'
import { useState } from 'react'

export function Historias() {
  const [showModal, setShowModal] = useState(false)
  const [src, setSrc] = useState('')

  const historiaVista = (e) => {
    e.preventDefault()
    const historia = e.target
    const usuario = historia.id
    console.log(e.target)
    console.log(usuario)

    if (historia.classList.contains('border-red-500')) {
      historia.classList.remove('border-red-500')
    }

    setShowModal(true)
    setSrc(data.users[usuario - 1].stories[0].media)

    setTimeout(() => {
      setShowModal(false)
    }, 2000)

  }

  return (
    <>
      <section className='px-2 relative overflow-x-scroll h-24 m-1'>
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
        <dialog className='w-screen h-screen outline-none box-border' open={showModal}>
          <div className='modal-box h-full w-full'>
            <img
              src={src}
              className='h-full object-cover aspect-[16/9]'
              alt='imagen usuario'
            />
          </div>
        </dialog>
      </section>
    </>
  )
}
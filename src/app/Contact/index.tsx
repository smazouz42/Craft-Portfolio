import { Title } from '../../components/Title'
import { FaDiscord, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col ~gap-4/14 font-fira items-start justify-between ~py-2/10">
      <div className="~text-lg/3xl text-white items-center w-full">
        <Title
          width={20}
          title="contacts"
        />
      </div>
      <div className='flex w-full justify-between'>
        <div className='w-full flex max-w-[1200px] text-gray-400 ~text-sm/lg gap-4 px-4 flex-col justify-end'>
          <p>Hello, I’m Elias!</p>
          <p>I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.</p>
        </div>
        <div className='w-full flex justify-end items-end'>
          <div className="border border-gray-400 w-fit hover:shadow-xl flex flex-col gap-2 p-4">
            <h1 className="text-white">Message me here</h1>
            <div className="flex items-center gap-4 text-gray-400 ">
              <a href="https://discord.com/users/your-discord-id" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
                <FaDiscord />
                <span>Discord</span>
              </a>
              <a href="mailto:your-email@example.com" className="hover:text-white flex items-center gap-2">
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export { Contact }

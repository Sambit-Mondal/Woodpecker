import React, { useState } from 'react';
import chatbot from '../assets/Chatbot.png';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

function Chatbot() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen((prev) => (!prev));
  }

  return (
    <>
      <div className='fixed lg:hidden right-4 bottom-4 z-50'>
        <img src={chatbot} alt="Chatbot" className='size-16 bg-black rounded-full p-2' onClick={toggleChatbot} />
      </div>

      {chatbotOpen &&
        <>
        <div className='fixed inset-0 bg-black opacity-40'></div>
          <div className='fixed top-0 bottom-0 right-0 left-0 w-[88%] h-[85%] m-5 p-4 flex items-center justify-center bg-screen rounded-sm border-[1px] border-black'>
            <div className='relative w-full h-full bg-white rounded-sm'>
              <div className='absolute bg-chatbot top-0 w-full flex items-center p-5 py-4 font-extrabold text-[1.2rem]'> Predicaster Bot</div>
              <div></div>
              <div>
                <form className='absolute bg-chatbot bottom-0 p-2 py-4 gap-2 w-full flex items-center'>
                  <input
                    type="text"
                    className='bg-white p-2 pl-3 w-full rounded-full'
                    placeholder='Enter your prompt'
                  />
                  <button>
                    <PaperAirplaneIcon className='size-10 text-black -rotate-45 bg-white rounded-full p-2 flex items-center justify-center' />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      }


      <div className='w-full h-[70%] hidden p-2 lg:flex items-center justify-center bg-screen rounded-sm'>
        <div className='relative w-full h-full bg-white rounded-sm'>
          <div className='absolute bg-chatbot top-0 w-full flex items-center p-5 py-3 font-extrabold text-[1.2rem]'> Predicaster Bot</div>
          <div></div>
          <div>
            <form className='absolute bg-chatbot bottom-0 p-3 gap-2 w-full flex items-center'>
              <input
                type="text"
                className='bg-white p-2 pl-3 w-full rounded-full'
                placeholder='Enter your prompt'
              />
              <button>
                <PaperAirplaneIcon className='size-10 text-black -rotate-45 bg-white rounded-full p-2 flex items-center justify-center transition duration-150 ease-in-out hover:bg-screen hover:text-white' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatbot
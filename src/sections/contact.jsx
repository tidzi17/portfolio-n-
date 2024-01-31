import Form from "../components/form"
import mailicon from '../assets/icons/email.png';
import giticon from '../assets/icons/github.png';
import linkedicon from '../assets/icons/linkedin.png';


export default function Contact(){
    return(
        <div id="contact" className="w-full  relative">
              <div className="absolute bottom-10 left-5 right-0 ">
        <p className="text-9xl font-bold text-black opacity-5">[3]</p>
      </div>
      <div className="w-full lg:px-28 py-28 ">
      <div>
            <div className="w-[120px] h-[2px] bg-black mb-4"></div>
            <h3 className="text-black text-4xl">get in touch</h3>
        </div>
        <div className="flex px-20 py-28 justify-between  ">
          <div className="w-1/2 ">
            <h3 className="text-5xl">Let's build something great together!</h3>
            <p className="text-xl mt-3">Feel free to contact me. I am always open to discussing new projects, creative ideas, or collaboration opportunities that align with your vision.</p>
            <div className="mt-8">
            <div className="w-[120px] h-[2px] bg-black mb-4"></div>
            <div className='flex gap-4 '>
              <a href='https://github.com/tidzi17' target='blank'><img src={giticon} alt="" className='cursor-pointer w-[32px] hover:scale-105'/></a>  
              <a href='https://www.linkedin.com/in/tijana-djudjic/' target='blank'><img src={linkedicon} alt="" className='cursor-pointer w-[32px] hover:scale-105'/></a>  
              <a href='mailto:tidzi15110@gmail.com' target='blank'><img src={mailicon} alt="" className='cursor-pointer w-[32px] hover:scale-105'/></a>  
            </div>
            </div>
          </div>
          <div className="w-1/3  ">
            <Form />
          </div>
        </div>
      </div>
        </div>
    )
}
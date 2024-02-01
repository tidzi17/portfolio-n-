import mailicon from '../assets/icons/email.png';
import giticon from '../assets/icons/github.png';
import linkedicon from '../assets/icons/linkedin.png';

const SocialsIcons = () => {
    return(
        <div className='flex flex-col gap-2 items-center '>
            <div className='flex flex-col gap-1 '>
              <a href='https://github.com/tidzi17' target='blank'><img src={giticon} alt="" className='cursor-pointer w-[24px] md:w-[32px] hover:scale-105'/></a>  
              <a href='https://www.linkedin.com/in/tijana-djudjic/' target='blank'><img src={linkedicon} alt="" className='cursor-pointer w-[24px] md:w-[32px] hover:scale-105'/></a>  
              <a href='mailto:tidzi15110@gmail.com' target='blank'><img src={mailicon} alt="" className='cursor-pointer w-[24px] md:w-[32px] hover:scale-105'/></a>  
            </div>
            <div className='w-[2px] h-12 md:h-20 bg-black'></div>
        </div>
    )

} 

export default SocialsIcons;
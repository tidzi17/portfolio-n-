export default function Form(){
    return(
        <form className="flex flex-col gap-10">
            <input type="text" placeholder="your first & last name" className="w-full h-12 border-[1px] border-black shadow-sm shadow-primaryGrey placeholder:pl-3 outline-none" />
            <input type="text" placeholder="your email" className="w-full h-12 border-[1px] border-black shadow-sm shadow-primaryGrey placeholder:pl-3 outline-none"/>
            <textarea name="" id="" placeholder="your message" className="w-full h-44 border-[1px] border-black shadow-sm shadow-primaryGrey placeholder:pl-3 placeholder:pt-3 outline-none"></textarea>
            <button className="w-2/5 px-1 py-2 shadow-sm shadow-primaryGrey bg-secondaryGrey text-white border-[1px] border-black rounded-3xl text-sm cursor-pointer transform duration-200 ease-in hover:bg-whitebgsec   hover:text-black">send message</button>
        </form>
    )
}
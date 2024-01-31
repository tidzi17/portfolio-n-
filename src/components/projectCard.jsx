import { FaGithubSquare } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";




export default function ProjectCard(){
    return(
        <div className="w-[700px] h-[230px] border-[1px] border-black rounded-3xl p-4 flex flex-row gap-3 justify-between">
            <div className="w-1/2 bg-black rounded-3xl">s</div>
            <div className="w-1/2 flex flex-col items-center text-center">
                <h4 className="font-bold">Project title</h4>
                <p className="text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, rem laboriosam deserunt nulla deleniti cum voluptates corporis maiores ratione </p>
                <p className="text-base mt-1">Stack: <span>React.js</span> <span>TailwindCSS</span></p>
                <div className="flex gap-5 mt-auto">
                    <div className="flex items-center">
                        <FaGithubSquare className="text-3xl"/>
                        <p className="text-lg">code</p>
                    </div>
                    <div className="flex items-center">
                        <RiExternalLinkLine  className="text-3xl"/>
                        <p className="text-lg">preview</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

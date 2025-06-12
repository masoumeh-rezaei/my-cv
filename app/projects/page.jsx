import Button from '../../components/button'
import imgPortfilo from '../../public/Images/project.portfilo.png'
import imgResturant from '../../public/Images/projectResturant2.png'
import imgTodo from '../../public/Images/project.todo.png'
import imgExpensse from '../../public/Images/project.expensse.png'
import imgCar from '../../public/Images/project-.png'
import Image from 'next/image'
import Link from 'next/link'
const projects = () => {
    const projectData=[
        {
            id:1,
            img:imgPortfilo,
            name:'Portfilo',
            tools:[
                {
                    id:1,
                    name:'react',
                },
                {
                    id:2,
                    name:'TailwindCss',
                },
                
            ],
            githubLink:'https://github.com/masoumeh-rezaei/portfolioweb/tree/main',
            projectLink:'https://portfolioweb-efdq-masoumeh.vercel.app/',
        
        },
        {
            id:2,
            img:imgResturant,
            name:'Resturant',
            tools:[
                {
                    id:1,
                    name:'react',
                },
                {
                    id:2,
                    name:'TailwindCss',
                },
                
            ],
            githubLink:'https://github.com/masoumeh-rezaei/resturant-project/tree/main',
            projectLink:'https://resturant-project-masoumeh.vercel.app/',
           
        },
        {
            id:3,
            img:imgTodo,
            name:'TODo List',
            tools:[
                {
                    id:1,
                    name:'react',
                },
                {
                    id:2,
                    name:'TailwindCss',
                },
                
            ],
            githubLink:'https://github.com/masoumeh-rezaei/To-Do-List/tree/main',
            projectLink:'https://to-do-list-masoumeh--psi.vercel.app/',
        
        },
        {
            id:4,
            img:imgExpensse,
            name:'Expense Calculator',
            tools:[
                {
                    id:1,
                    name:'react',
                },
                {
                    id:2,
                    name:'TailwindCss',
                },
                
            ],
            githubLink:'https://github.com/masoumeh-rezaei/Expense-cal/tree/main',
            projectLink:'https://expense-calculator-masoumeh.vercel.app/',
           
        },
        {
            id:5,
            img:imgCar,
            name:'Car Gallery',
            tools:[
                {
                    id:1,
                    name:'react',
                },
                {
                    id:2,
                    name:'TailwindCss',
                },
                
            ],
            githubLink:'https://github.com/masoumeh-rezaei/car-gallery/tree/main',
            projectLink:'https://car-gallery-masoumehweb.vercel.app/',
           
        },
        
    ]
    return (
        <div>
            <div className="bg-gradient-to-r from-[#282f44] to-[#634258] pt-20 pb-10 lg:pb-20 h-full mb-0" id='projects'>
                <div className="container mx-auto">
                    <div>
                        <h1 className=" text-center font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#9ad1aa] from-40% to-violet-500 md:text-5xl text-4xl">My Projects</h1>
                    </div>
                   
                    <div>
                        <ul className='flex flex-col md:flex-row flex-wrap gap-5 justify-center items-center pt-5 md:pt-10'>
                            {
                                projectData.map((data)=>(
                                    <li key={data.id} className='bg-[#3e3245] p-3 rounded-2xl w-[90%] md:w-auto '>
                                        <div className='proj-imgbx overflow-hidden relative rounded-md'>
                                            <Image src={data.img} width={350} height={100} alt='image' className='  w-full md:w-[350px] h-[200px] object-cover object-top rounded-md cursor-pointer ' />
                                            <Link href={data.projectLink} target='-blank'>
                                            <div className=' absolute   text-center  transition-all duration-200  opacity-0 proj-txtx text-slate-400 font-semibold'>
                                            <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-[#9ad1aa] from-60% to-violet-500 text-3xl'>{'Show Project'}</h1>
                                            </div>
                                            </Link>
                                        </div>
                                           <div className='flex flex-col gap-3'>
                                            <div> <h1 className='font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#9ad1aa] from-40% to-violet-500 text-3xl pt-3 sm:text-xl'>{data.name}</h1></div>
                                            <ul className='flex flex-row gap-4 text-slate-400 text-sm'>
                                                tools:{
                                                    data.tools.map((tool)=>(<li key={tool.id} className='text-slate-400 text-sm' >{tool.name}</li>))
                                                }
                                            </ul>
                                            <hr className='text-[#9ad1aa]'/>
                                            <div className='flex flex-row justify-between'>
                                                <div><Button text={'Github'} href={data.githubLink} classNameBTN={'px-3 py-1'}/></div>
                                                <div><Button text={'Show Project'} href={data.projectLink} classNameBTN={'px-3 py-1'}/></div>
                                            </div>
                                            
                                               

                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default projects;

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md flex items-center' >
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <ul className="flex gap-6">
                <Link to='/'> <li className="hidden sm:inline text-slate-700 hover:underline hover:font-bold">ALL</li></Link>
               <Link to='/fsd'> <li className="hidden sm:inline text-slate-700 hover:underline hover:font-bold">FULL STACK DEVELOPMENT</li></Link>
                <Link to='/ds'> <li className="text-slate-700 hover:underline hover:font-bold">DATA SCIENCE</li></Link>
                <Link to='/cyber'> <li className="text-slate-700 hover:underline hover:font-bold">CYBER CRIME</li></Link>
                <Link to='/carrer'> <li className="text-slate-700 hover:underline hover:font-bold">CAREER</li></Link>
            </ul>
        </div>
    </header>
  )
}

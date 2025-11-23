import { Link } from "react-router-dom"
import CreateTask from "../pages/CreateTask"

function Navbar() {
    return (
        <div className="bg-purple-200 p-2 rounded-md">
            <ul className="flex gap-2 justify-center font-medium">
                <li className="hover:underline"><Link to={"/landing"}>Home |</Link></li>
                <li className="hover:underline"><Link to={"/createtask"}>Create Task |</Link></li>
                <li className="hover:underline"><Link to={"/"}>Logout</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
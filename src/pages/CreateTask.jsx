import Navbar from "../components/Navbar"
import { Navigate,useNavigate } from "react-router-dom"
import { useState } from "react"

function CreateTask(props) {

    const tasks = props.tasks
    const setTasks = props.setTasks
    const navigate = useNavigate()

    const [newtask, setnewtask] = useState("")

    function handleNewtask(evt) {
        setnewtask(evt.target.value)
    }

    function handleAdd(evt) {
        evt.preventDefault()
        setTasks([...tasks, newtask])
        navigate("/landing")
        setnewtask("")
    }


    return (
        <form onSubmit={handleAdd}>
            <div className="bg-purple-600 p-10 flex justify-center">
                <div className="bg-white p-6 rounded-md w-full md:w-5/6 xl:w-3/4">
                    <Navbar />
                    <h1 className="text-2xl font-semibold my-3">Create Task</h1>
                    <input type="text"
                        placeholder="Enter Task"
                        className="bg-transparent border border-black p-2 w-full rounded-md"
                        onChange={handleNewtask}
                        value={newtask} 
                        required/>
                    <div className="flex justify-center">
                        <button className="bg-[#FCA201] text-white px-6 py-2 font-semibold rounded-md hover:-translate-y-1 transition-transform my-4"
                            type="submit">Add</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreateTask
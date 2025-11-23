import Navbar from "../components/Navbar"
function EditTask(props){

    const tasks = props.tasks
    const setTasks = props.setTasks

    return(
        <form>
            <div className="bg-purple-600 p-10 flex justify-center">
                <div className="bg-white p-6 rounded-md w-full md:w-5/6 xl:w-3/4">
                    <Navbar />
                    <h1 className="text-2xl font-semibold my-3">Update the Task</h1>
                    <input type="text"
                        placeholder="Enter Task"
                        className="bg-transparent border border-slate-900 p-2 w-full rounded-md" 
                        required/>
                    <div className="flex justify-center">
                        <button className="bg-[#FCA201] text-white px-6 py-2 font-semibold rounded-md hover:-translate-y-1 transition-transform my-4"
                            type="submit">Update</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EditTask
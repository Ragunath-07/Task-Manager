import Navbar from "../components/Navbar"
import AllTasks from "../components/AllTasks"
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';


function Landing(props) {

    const tasks = props.tasks
    const setTasks = props.setTasks

    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");

    const [searchText, setSearchText] = useState("");

    function handleDel(delIndex) {
        const temparr = tasks.filter(function (item, index) {
            if (index == delIndex) {
                return false
            }
            else {
                return true
            }
        })
        setTasks(temparr)
    }

    function handleEdit(editIndex) {
        setEditIndex(editIndex);
        setEditText(tasks[editIndex]);
    }

    function saveEdit() {
        const updated = [...tasks];
        updated[editIndex] = editText;
        setTasks(updated);

        setEditIndex(null);
        setEditText("");
    }

    return (
        <div className="bg-purple-600 p-10 flex justify-center">
            <div className="bg-white p-6 rounded-md w-full md:w-5/6 xl:w-3/4">
                <Navbar />
                <AllTasks searchText={searchText} setSearchText={setSearchText} />
                <div className="bg-purple-200 p-2 rounded-md my-4">
                    <table className="w-full text-center">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Tasks</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks
                                .filter(item =>
                                    item.toLowerCase().includes(searchText.toLowerCase())
                                )
                                .map(function (item, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}.</td>
                                            <td className="p-2">
                                                {editIndex === index ? (<input className="border border-black bg-transparent p-1 rounded w-full lg:w-96" value={editText} onChange={(e) => setEditText(e.target.value)} />) : (item)} </td>
                                            <td className="p-2">
                                                {editIndex === index ? (<button className="bg-green-600 text-white px-2 py-1 rounded mx-2 my-1" onClick={saveEdit}><FontAwesomeIcon icon={faFloppyDisk} /></button>) :
                                                    (<button className="text-white px-2 py-1 rounded my-1 mx-2" onClick={() => handleEdit(index)} style={{ backgroundColor: "blue" }}>
                                                        <FontAwesomeIcon icon={faPenToSquare} /></button>)}
                                                <button className="text-white px-2 py-1 rounded" onClick={() => handleDel(index)} style={{ backgroundColor: "red" }}><FontAwesomeIcon icon={faTrashCan} /></button>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Landing
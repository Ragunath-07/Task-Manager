import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

function Signup(props) {

    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()

    const [newusername, setnewusername] = useState("")
    const [newuserpass, setnewuserpass] = useState("")

    function handleNewusername(evt) {
        setnewusername(evt.target.value)
    }

    function handleNewuserpass(evt) {
        setnewuserpass(evt.target.value)
    }

    function handleSignup(evt) {
        evt.preventDefault()
        setusers([...users, { username: newusername, password: newuserpass }])
        navigate("/")
    }

    return (
        < form onSubmit={handleSignup}>
            <div className="bg-purple-600 p-14 flex justify-center">
                <div className="bg-white p-10 rounded-md flex flex-col gap-3 items-center w-96 md:w-2/3">
                    <h1 className="text-2xl font-semibold">Create your account</h1>
                    <p>You can Signup here :)</p>
                    <input type="text"
                        placeholder="username"
                        className="border border-black bg-transparent p-1 w-56 rounded-md"
                        onChange={handleNewusername}
                        required />
                    <input type="password"
                        placeholder="password"
                        className="border border-black bg-transparent p-1 w-56 rounded-md"
                        onChange={handleNewuserpass}
                        required />
                    <button className="bg-[#FCA201] text-white p-2 font-semibold rounded-md hover:-translate-y-1 transition-transform"
                        type="submit">Sign Up</button>
                    <p>Already have an account? <Link className="underline" to={"/"}>Login</Link></p>
                </div>
            </div>
        </form >
    )
}

export default Signup
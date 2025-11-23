import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

function Login(props) {

    const users = props.users
    const navigate = useNavigate()

    const [newusername, setnewusername] = useState("")
    const [newuserpass, setnewuserpass] = useState("")
    const [Ruser, setRuser] = useState(true)

    function handleNewusername(evt) {
        setnewusername(evt.target.value)
    }

    function handleNewuserpass(evt) {
        setnewuserpass(evt.target.value)
    }

    function handleLogin(evt) {

        evt.preventDefault()

        if (newusername === "" || newuserpass === "") {
            setRuser(false)
        }

        var userfound = false

        users.forEach(function (item) {
            if (item.username === newusername && item.password === newuserpass) {
                console.log("Login Successfull")
                userfound = true
                navigate("/landing")
            }
        })
        if (userfound === false) {
            setRuser(false)
        }
        setnewusername("");
        setnewuserpass("");
    }


    return (
        <form onSubmit={handleLogin}>
            <div className="bg-purple-600 p-14 flex justify-center">
                <div className="bg-white p-10 rounded-md flex flex-col gap-3 items-center w-96 md:w-2/3">
                    <h1 className="text-2xl font-semibold">Welcome!👋</h1>
                    {Ruser ? <p>I help you to manage your Tasks after you login :)</p> : <p className="text-red-500">Entered username or password is wrong</p>}
                    <input type="text"
                    value={newusername}
                        placeholder="username"
                        className="border border-black bg-transparent p-1 w-56 rounded-md"
                        onChange={handleNewusername} required />
                    <input type="password"
                        value={newuserpass}
                        placeholder="password"
                        className="border border-black bg-transparent p-1 w-56 rounded-md"
                        onChange={handleNewuserpass} required />
                    <button className="bg-[#FCA201] text-white p-2 font-semibold rounded-md hover:-translate-y-1 transition-transform"
                        type="submit">Login</button>
                    <p>Don't have an account? <Link className="underline" to={"/signup"}>Sign Up</Link></p>
                </div>
            </div>
        </form>
    )
}

export default Login
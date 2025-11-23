function AllTasks(props) {

    const searchText = props.searchText
    const setSearchText = props.setSearchText
    
    return (
        <div className="my-5">
            <h1 className="text-2xl font-semibold">All Tasks</h1>
            <input type="text"
                placeholder="Search tasks"
                className="bg-transparent mt-2 border border-black p-2 w-full rounded-md"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} />
        </div>
    )
}

export default AllTasks
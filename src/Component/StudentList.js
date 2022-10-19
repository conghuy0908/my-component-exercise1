const studentArray = [
    {
        id:1,
        name: " Nguyễn Văn Hoàng",
        age:22,
        address:"Franch"
    },
    {
        id:2,
        name: " Nguyễn Hoàng Khánh",
        age:33,
        address:"San-Jose"
    },
    {
        id:3,
        name: " Nguyễn Hoàng Nam",
        age:23,
        address:"Australia"
    },
    {
        id:4,
        name: " Nguyễn Văn Chung",
        age:16,
        address:"San-Fansico"
    }
]
export const StudentList = (props) => {
    return (
        <div className="container">
            <h1>Students List</h1>
            <table className="table table-hover table-striped">
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                {
                    studentArray.map((student,index) =>(
                    <tr key="index">
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}
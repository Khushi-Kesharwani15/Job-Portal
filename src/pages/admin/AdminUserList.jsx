import React from "react";

function AdminUserList() {
  const list = [
    {
      id: 1,
      userName: "Aman Sharma",
      email: "sharma@gmail.com",
      role: "Admin",
      dob: "12-05-1998",
      gender: "Male",
    },
    {
      id: 2,
      userName: "Amit Verma",
      email: "amit@gmail.com",
      role: "User",
      dob: "25-08-2000",
      gender: "Male",
    },
    {
      id: 3,
      userName: "Neha Singh",
      email: "neha@gmail.com",
      role: "User",
      dob: "10-02-1999",
      gender: "Female",
    },
    {
      id: 4,
      userName: "Pooja Gupta",
      email: "pooja@gmail.com",
      role: "Manager",
      dob: "18-11-1997",
      gender: "Female",
    },
    {
      id: 5,
      userName: "Ravi Kumar",
      email: "ravi@gmail.com",
      role: "User",
      dob: "05-07-2001",
      gender: "Male",
    },
  ];

  return (
    <div className="">
      <label className="form-label fs-4 fw-bold text-primary mb-4">
        User List
      </label>
      <table className="table table-bordered table-hover shadow-sm">
        <thead className="table-primary">
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td className="bg-light text-dark fw-semibold">{item.id}</td>

              <td className="bg-white text-primary fw-semibold">
                {item.userName}
              </td>

              <td className="text-secondary">{item.email}</td>

              <td className="bg-warning-subtle text-warning-emphasis fw-semibold">
                {item.role}
              </td>

              <td className="bg-info-subtle text-info-emphasis">{item.dob}</td>

              <td className="bg-light">{item.gender}</td>

              <td>
                <span className="badge bg-success-subtle text-success border border-success">
                  Active
                </span>
              </td>

              <td>
                <button className="btn btn-sm btn-outline-warning">Edit</button>

                <button className="btn btn-sm btn-outline-danger ms-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUserList;

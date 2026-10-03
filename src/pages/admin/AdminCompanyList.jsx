import React from "react";

function AdminCompanyList() {
  const list = [
    {
      id: 1,
      companyName: "Jamtech",
      location: "Lucknow",
    },
    {
      id: 2,
      companyName: "TechnoSoft",
      location: "Delhi",
    },
    {
      id: 3,
      companyName: "WebWos",
      location: "Noida",
    },
    {
      id: 4,
      companyName: "WebWorks",
      location: "Noida",
    },
    {
      id: 5,
      companyName: "WebWorks",
      location: "Noida",
    },
    {
      id: 6,
      companyName: "WebWorks",
      location: "Noida",
    },
  ];

  return (
    <div className="">
      <label className="form-label fs-4 fw-bold text-primary mb-4">
      Company List
      </label>
      <table className="table table-bordered table-hover shadow-sm">
        <thead className="table-primary">
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td className="bg-light text-dark fw-semibold">{item.id}</td>

              <td className="bg-white text-primary fw-semibold">
                {item.companyName}
              </td>

              <td className="bg-info-subtle text-info-emphasis">
                {item.location}
              </td>

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

export default AdminCompanyList;

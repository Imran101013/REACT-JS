import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [formdata, setformdata] = useState({ email: "", password: "" });
  const [allUsers, setAllUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // to track which row is being edited

  // Load users from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setAllUsers(storedUsers);
  }, []);

  const handleChange = (event) => {
    setformdata({ ...formdata, [event.target.name]: event.target.value });
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    let updatedUsers;

    if (editIndex !== null) {
      // Editing existing user
      updatedUsers = [...allUsers];
      updatedUsers[editIndex] = formdata;
      setEditIndex(null);
    } else {
      // Adding new user
      updatedUsers = [...allUsers, formdata];
    }

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setAllUsers(updatedUsers);
    setformdata({ email: "", password: "" });
  };

  const handleDelete = (index) => {
    const updatedUsers = allUsers.filter((_, i) => i !== index);
    setAllUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleEdit = (index) => {
    setformdata(allUsers[index]);
    setEditIndex(index);
  };

  const handleClearAll = () => {
    alert("Do You Want To Clear Users Data...??");
    localStorage.removeItem("users");
    setAllUsers([]);
    setformdata({ email: "", password: "" });
    setEditIndex(null);
  };

  return (
    <>
      <div className="login-container flex flex-col justify-center items-center pt-20 px-4">
        <div className="login box bg-white rounded-xs border-3 border-red-100 max-w-md p-6 w-full">
          <h2 className="pb-4 font-medium text-center">
            {editIndex !== null
              ? "Edit User"
              : "Login Form Handling Through useState"}
          </h2>
          <form>
            <div className="input-fields flex flex-col mb-4">
              <label>Email</label>
              <input
                onChange={handleChange}
                value={formdata.email}
                type="email"
                name="email"
                required
                className="border p-2 rounded"
              />
            </div>
            <div className="input-fields flex flex-col mb-4">
              <label>Password</label>
              <input
                onChange={handleChange}
                value={formdata.password}
                type="password"
                name="password"
                required
                className="border p-2 rounded"
              />
            </div>
            <button
              className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition rounded"
              type="submit"
              onClick={handlesubmit}
            >
              {editIndex !== null ? "Update User" : "Login"}
            </button>
          </form>
        </div>

        {/* Table */}
        <div className="user-table mt-10 max-w-md w-full">
          <h3 className="font-semibold mb-2 text-lg">Stored Users</h3>

          {allUsers.length === 0 ? (
            <p>No users found.</p>
          ) : (
            <>
              <table className="table-auto w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Password</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((user, index) => (
                    <tr key={index}>
                      <td className="border p-2">{user.email}</td>
                      <td className="border p-2">{user.password}</td>
                      <td className="border p-2 flex gap-2 justify-center">
                        <button
                          onClick={() => handleEdit(index)}
                          className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button
                onClick={handleClearAll}
                className="mt-4 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition"
              >
                Clear All Users
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

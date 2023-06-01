import "../css/Admin.css"

const Admin = () => {
  return (
    <div className="admin-page">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Products</li>
          <li>Orders</li>
        </ul>
      </div>
      <div className="admin-content">
        <h1>Welcome, Admin!</h1>
        <p>You have full control over the system.</p>
      </div>
    </div>
  );
};

export default Admin;

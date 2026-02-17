import { Link } from "react-router-dom";


function UserHeader() {
  return (
    <ul className="nav-links">
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/Pets">My Pets</Link></li>
      <li><Link to="/appointments">Appointments</Link></li>
    </ul>
  );
}


export default UserHeader;

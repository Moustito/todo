import { Link } from "react-router-dom";

export default function Navbar() {
  //State

  //Comportements

  //Render
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/datepicker">Calendar</Link>
    </nav>
  );
}

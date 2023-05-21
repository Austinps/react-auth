import { Link } from "react-router-dom";

export default function Lounge() {
  return (
    <section>
      <h1>Private Area</h1>
      <br />
      <p>Admins and Editors can view this.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
}

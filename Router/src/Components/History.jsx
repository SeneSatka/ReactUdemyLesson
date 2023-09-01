import React from "react";
import { Link, Outlet } from "react-router-dom";
//Outlet içiçe route nin geçerli olması için kullanılır
function History() {
  return (
    <>
      <div>History</div>
      <nav>
        <Link to="company">Our Companies</Link>
        <Link to="team">Team</Link>
        {/* İç içe route nin başına slash("/") gelmez  */}
      </nav>
      <Outlet />
    </>
  );
}

export default History;

import React from "react";
import { useSearchParams } from "react-router-dom";

function Members() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "active";
  return (
    <>
      <div>Members</div>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Aktif üyeler
      </button>
      <button onClick={() => setSearchParams()}>Tüm üyeler</button>
      {isActive ? <h2>Aktif Üyeler</h2> : <h2>Tüm üyeler</h2>}
    </>
  );
}

export default Members;

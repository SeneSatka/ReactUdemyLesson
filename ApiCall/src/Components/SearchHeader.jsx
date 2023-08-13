import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = () => {
    event.preventDefault();
    search(valueInput);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="searchDiv">
      <form className="searchForm" onSubmit={handleFormSubmit}>
        <label htmlFor="search">Ne aratmak istiyorsun?</label>
        <input
          type="text"
          name="search"
          value={valueInput}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchHeader;

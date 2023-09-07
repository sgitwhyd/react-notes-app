import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearchEventHandler, placeholder }) => {
  return (
    <input
      type="search"
      className="w-full rounded  border border-primary bg-transparent px-2 py-2 text-sm placeholder:text-sm placeholder:font-bold focus:outline-none md:w-4/12 lg:w-3/12 "
      placeholder={placeholder}
      onChange={onSearchEventHandler}
    />
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSearchEventHandler: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

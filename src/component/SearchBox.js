import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SEARCH",
      payload: { keyword },
    });
  }, [keyword, dispatch]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="이름을 입력하세요"
        onChange={handleChange}
        value={keyword}
      />
    </div>
  );
};

export default SearchBox;

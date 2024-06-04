"use client";
// import React, { useState } from "react";

export default function SearchBar(props) {
  const { searchValue, setSearchValue } = props;
  return (
    <input
      className=" text-sm p-1 mt-6"
      placeholder="Search blog posts..."
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}

import React from "react";

const JSEditor = ({ value, onChange }) => {
  return (
    <>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-64 p-2 resize-none border rounded-lg text-black"
        placeholder="JavaScript"
      />
    </>
  );
};

export default JSEditor;

import React from "react";
function ThousandsSeparator(props) {
  let number = props.children;
  let thousands = Math.floor(number / 1000);
  let hundreds = number % 1000;
  return (
    <>
      {thousands},{hundreds}
    </>
  );
}
export default ThousandsSeparator;

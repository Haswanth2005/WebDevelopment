import React from "react";

const Accordion = ({ list }) => {
  return (
    <ul style={{ listStyle: "disc", paddingLeft: "30px" }}>
      {list.map((item, idx) => (
        <li key={idx} style={{ cursor: "pointer", margin: "6px 0" }}
          onClick={() => {
            console.log(item);

          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Accordion;

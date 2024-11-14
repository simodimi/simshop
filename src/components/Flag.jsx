import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "../style/shopping.css";

const Flag = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flagcontainer">
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        searchable
        placeholder="selectionnez un pays"
        searchPlaceholder="rechercher..."
        customLabels={{ FR: "FR" }}
      />
    </div>
  );
};

export default Flag;

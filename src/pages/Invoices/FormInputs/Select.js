import React, { useEffect, useState } from "react";
import Select from "react-select";

/**
 *
 * @param {*} param0
 * @returns
 */
const SelectInput = ({ data, handleChange, type = "customer" }) => {
  const [choices, setchoices] = useState();
  const [selectedOption, setSelectedOption] = useState({
    label: "Select Dept",
    value: 0,
  });

  useEffect(() => {
    if (type === "customer") {
      let tempArray = [];
      data.map((e) => {
        tempArray.push({
          value: e.id,
          label: `${e.id} ${e.firstName} ${e.lastName} ${e.company}`,
        });
      });
      setchoices(tempArray);
    } else if (type === "status") {
      setchoices(data);
      setSelectedOption(choices);
    }
    setSelectedOption(choices);
  }, [data]);

  const handleDataForm = ({ value }) => {
    handleChange({
      currentTarget: {
        name: type,
        value: value,
      },
    });
  };
  return (
    <div class="flex -mx-3">
      <div class="px-3 mb-5 w-full">
        <Select
          defaultValue={selectedOption}
          onChange={handleDataForm}
          options={choices}
        />
      </div>
    </div>
  );
};

export default SelectInput;

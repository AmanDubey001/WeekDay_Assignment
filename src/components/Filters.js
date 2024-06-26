import { Autocomplete, Chip, TextField } from "@mui/material";
import React from "react";

const Filters = ({ data, label, value, setValue }) => {
  return (
    <>
      <Autocomplete
        sx={{ height: "100px" }}
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue([...newValue]);
        }}
        options={data}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              label={option.title}
              {...getTagProps({ index })}
              // disabled={fixedOptions.indexOf(option) !== -1}
            />
          ))
        }
        style={{ minwidth: 200 }}
        renderInput={(params) => (
          <TextField {...params} label={label} size="small" />
        )}
      />
    </>
  );
};

export default Filters;

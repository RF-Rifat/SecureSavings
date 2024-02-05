import { Button, Input } from "@material-tailwind/react";
import React from "react";

const SearchBar = () => {
  const [text, setText] = React.useState("");
  const onChange = ({ target }) => setText(target.value);
  return (
    <div>
      {" "}
      <div className="relative flex w-full">
        <Input
          type="text"
          color="blue"
          label="Type Here"
          //   value="searchText"
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={text ? "gray" : "blue-gray"}
          disabled={!text}
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

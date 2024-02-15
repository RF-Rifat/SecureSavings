import BlogCard from "./BlogCard";
import useGetData from "../../Hooks/useGetData";
// import Spinner from "../../Shared/Spinner";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

import { useState } from "react";

import { Button, Typography, Card, CardBody, CardFooter, CardHeader } from "@material-tailwind/react";


const Blogs = () => {
  const [search, setSearch] = useState("");
  const [blogs, isLoading] = useGetData("/api/blog");
  // console.log(blogs);
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto flex justify-center mb-10">
        <Card className="mt-6 w-96 animate-pulse">
          <CardHeader
            shadow={false}
            floated={false}
            className="relative grid h-56 place-items-center bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </CardHeader>
          <CardBody>
            <Typography
              as="div"
              variant="h1"
              className="mb-4 h-3 w-56 rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              disabled
              tabIndex={-1}
              className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
            >
              &nbsp;
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h1 className="dark:text-white font-semibold text-5xl text-center mb-5">
        All Blogs
      </h1>
      <div className="flex w-32 mt-1 overflow-hidden rounded mx-auto mb-3 md:mb-14">
        <div className="flex-1 h-2 bg-teal-200"></div>
        <div className="flex-1 h-2 bg-teal-400"></div>
        <div className="flex-1 h-2 bg-teal-300"></div>
      </div>

      {/* search and filter */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10  mb-5">
        <Filter></Filter>
        <SearchBar setSearch={setSearch}></SearchBar>
      </div>

      <div>
        {/* blog */}
        <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {blogs?.map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
        </div>
        {/* sidebar */}
        {/* <div>sidebar</div> */}
      </div>
    </div>
  );
};

export default Blogs;

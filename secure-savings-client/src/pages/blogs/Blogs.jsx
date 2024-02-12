import BlogCard from "./BlogCard";
import useGetData from "../../Hooks/useGetData";
import Spinner from "../../Shared/Spinner";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import { useState } from "react";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [blogs, isLoading] = useGetData("/api/blog");
  // console.log(blogs);
  if (isLoading) {
    return <Spinner></Spinner>;
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

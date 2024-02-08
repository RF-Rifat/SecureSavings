import { useParams } from "react-router-dom";
import Spinner from "../../Shared/Spinner";
import useGetData from "../../Hooks/useGetData";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import LatestBlog from "./LatestBlog";
import AddComment from "./AddComment";
import Comments from "./comments/Comments";

const BlogDetails = () => {
  const [blogDetails, setDetails] = useState("");
  const { id } = useParams();
  const [blogs, isLoading] = useGetData("/api/blog");
  // console.log(blogs);
  useEffect(() => {
    const details = blogs.find((blog) => blog._id == id);
    // console.log(details);
    setDetails(details);
  }, [id, blogs]);
  //   console.log(blogDetails);
  //   const { title, post, blogImage } = blogDetails;
  console.log(blogs);
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  //   console.log(id);
  return (
    <>
      <div className="max-w-6xl mx-auto px-2">
        <div className=" flex flex-col lg:flex-row gap-5">
          <Card className="max-w-2xl overflow-hidden bg-gray-50  font-poppins dark:bg-gray-800">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={blogDetails?.blogImage} alt="ui/ux review check" />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="text-gray-800 md:text-4xl dark:text-gray-300"
              >
                {blogDetails?.title}
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal text-gray-800 dark:text-gray-400"
              >
                {blogDetails?.post}
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3"></div>
              {/* <Typography className="font-normal">January 10</Typography> */}
            </CardFooter>
          </Card>

<<<<<<< HEAD
        <div className="hidden  lg:block">
          <h1 className="text-3xl   font-semibold mt-5 lg:mt-0 mb-2 text-center lg:text-left">
            Others Blog
          </h1>
          <div className="lg:overflow-y-auto lg:h-[400px]">
            <LatestBlog></LatestBlog>
=======
          <div>
            <h1 className="text-3xl  font-semibold mt-5 lg:mt-0 mb-2 text-center lg:text-left">
              Others Blog
            </h1>
            <div className="overflow-y-auto h-[400px]">
              <LatestBlog></LatestBlog>
            </div>
>>>>>>> 2b51371f96f1627a73584920b755bf953c1e20d2
          </div>
        </div>

        {/* add comment */}
        <div className="mt-10">
          <AddComment id={id}></AddComment>
        </div>
      </div>

<<<<<<< HEAD
      <div>
        <Comments id={id}></Comments>
      </div>
      {/* add comment */}

      <div className="mt-10">
        <AddComment id={id}></AddComment>
      </div>
      <div className=" block  lg:hidden ">
        <h1 className="text-3xl font-semibold mt-5 lg:mt-0 mb-2 text-center lg:text-left">
          Others Blog
        </h1>
        <div className="lg:overflow-y-auto lg:h-[400px]">
          <LatestBlog></LatestBlog>
        </div>
      </div>
    </div>
=======
      {/* blog details */}
      <div className="px-8 lg:px-52">
        <div className="container mx-auto lg:flex">
          <div className="mt-6 w-full lg:w-[65%] lg:px-8">
            <div className="mb-12">
              <a href="/blog/material-tailwind-new-update">
                <img
                  src={blogDetails?.blogImage}
                  alt="blog post"
                  className="rounded-lg shadow-xl mb-8"
                />
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit">
                  {blogDetails?.title}
                </h4>
              </a>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit mb-4">
                {blogDetails?.post}
              </p>
              <div className="flex items-center border-b pb-6">
                <img
                  src={blogDetails?.authorImage}
                  alt="Added by"
                  className="inline-block relative object-cover object-center !rounded-full w-9 h-9 shadow"
                />
                <div>
                  <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit ml-2">
                    {blogDetails?.name}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-80 ml-auto">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6">
              <div className="p-6">
                <form className="mt-4 lg:mt-0" target="_self" noValidate="">
                  <div className="mt-6 w-full lg:mt-0">
                    <div className="relative w-full min-w-[200px] h-10">
                      <Input
                        label="Search with blog title"
                        required=""
                        type="search"
                        name="search"
                        id="search"
                        className="peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent text-sm py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border-[1.5px]  !bg-white !px-4 text-primary !ring-transparent placeholder:text-gray-600  focus:!border-t-primary focus:ring-primary/20"
                      />
                      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 hidden">
                        {" "}
                        <span className="inline-block text-red-500 ml-0.5">
                          *
                        </span>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-2 px-4 rounded-lg text-white shadow-md shadow-blue-gray-500/20 hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none shrink-0 bg-primary text-base font-medium capitalize md:w-full mt-4"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6">
              <div className="p-6">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-4 uppercase">
                  Recommended Topics
                </h6>
                <div className="flex items-center justify-between mb-2">
                  <a href="/blog/tag/frameworks">
                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 hover:font-normal">
                      Latest Blog
                    </p>
                  </a>
                  <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-gray-900">
                    18
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6">
              <div className="p-6">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-4 uppercase">
                  Latest Blogposts
                </h6>
                <ul>
                  <li className="mb-4">
                    <a href="/blog/7-reasons-why-you-should-use-tailwind-css">
                      <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900">
                        7 Reasons Why You Should Use Tailwind CSS Right Now
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
>>>>>>> 2b51371f96f1627a73584920b755bf953c1e20d2
  );
};

export default BlogDetails;

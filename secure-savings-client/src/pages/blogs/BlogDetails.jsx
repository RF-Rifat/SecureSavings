import { useParams } from "react-router-dom";
import Spinner from "../../Shared/Spinner";
import useGetData from "../../Hooks/useGetData";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
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
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  //   console.log(id);
  return (
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

        <div className="hidden  lg:block">
          <h1 className="text-3xl   font-semibold mt-5 lg:mt-0 mb-2 text-center lg:text-left">
            Others Blog
          </h1>
          <div className="lg:overflow-y-auto lg:h-[400px]">
            <LatestBlog></LatestBlog>
          </div>
        </div>
      </div>

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
  );
};

export default BlogDetails;

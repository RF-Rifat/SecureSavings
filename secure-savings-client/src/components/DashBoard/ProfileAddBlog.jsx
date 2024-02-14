import { Button } from "@material-tailwind/react";
import useGetData from "../../Hooks/useGetData";

const ProfileAddBlog = () => {
  const [blogData] = useGetData("/api/blog");
  console.log(blogData);
  // const { title, authorImage, blogImage } = blogData;
  return (
    <>
      <div className="flex-none w-full max-w-full px-3 mt-6">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="p-4 pb-0 mb-0 rounded-t-2xl">
            <h6 className="mb-1 dark:text-white">Blogs</h6>
            <p className="leading-normal text-sm dark:text-white dark:opacity-80">
              Posted by Admins
            </p>
          </div>
          <div className="flex-auto p-4">
            <div className="flex flex-wrap -mx-3">
              {blogData.map((item) => (
                <div
                  key={item._id}
                  className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12"
                >
                  <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                    <div className="relative">
                      <a className="block shadow-xl rounded-2xl">
                        <img
                          src={item.blogImage}
                          alt="img-blur-shadow"
                          className="max-w-full shadow-soft-2xl rounded-2xl"
                        />
                      </a>
                    </div>
                    <div className="flex-auto px-1 pt-6">
                      <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text dark:text-white dark:opacity-80">
                        {item?.title}{" "}
                      </p>
                      <a href="javascript:;">
                        <h5 className="dark:text-white">{item?.name}</h5>
                      </a>
                      <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                        {item?.post.length > 80
                          ? `${item?.post.substring(0, 100)}...`
                          : item?.post}
                      </p>
                      <div className="flex items-center justify-between">
                        <Button type="button" color="blue">
                          View Post
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                <div className="relative flex flex-col h-full min-w-0 break-words bg-transparent border-2 border-solid shadow-none dark:shadow-lg rounded-2xl border-slate-100 bg-clip-border dark:border-slate-700">
                  <div className="flex flex-col justify-center flex-auto p-6 text-center">
                    <a href="javascript:;">
                      <i
                        className="mb-4 fa fa-plus text-slate-400 dark:text-white dark:opacity-80"
                        aria-hidden="true"
                      />
                      <h5 className="text-slate-400 dark:text-white dark:opacity-80">
                        Add New Blog
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAddBlog;

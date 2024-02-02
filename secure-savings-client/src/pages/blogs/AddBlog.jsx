import toast from "react-hot-toast";
import { modifyData } from "../../Hooks/Api";
import { useContext, useState } from "react";
import { Input, Option, Select, Textarea } from "@material-tailwind/react";
import "./AddBlog.css";
import { AuthProvider } from "../../Authentication/AuthProvider";
import blogBG from "../../assets/images/marqueeItems/blogBG.png";
const AddBlog = () => {
  const { user } = useContext(AuthProvider);
  const [blogType, setBlogType] = useState("");
  const handleNewBlog = async (e) => {
    e.preventDefault();

    const form = e.target;

    // const blogType = document.getElementById("type").type.value;
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    const newBlog = {
      name: user?.displayName,
      title: form.title.value,
      type: blogType,
      date: formattedDate,
      authorImage: user?.photoURL,
      blogImage: form.image.value,
      post: form.post.value,
    };
    // console.log(newBlog.title);
    console.log(newBlog);

    try {
      const res = await modifyData("/api/blog", "POST", newBlog);
      // console.log(res.acknowledged);
      if (res.acknowledged) {
        toast.success("blog Post Successful");
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div>{/* <img className="w-full h-full" src={blogBG} alt="" /> */}</div>

        <div className="add-blog   dark:bg-dark  rounded-lg px-8 py-6 mx-auto my-8">
          <h2 className="text-3xl  dark:text-gray-200  font-semibold mb-4 text-center">
            Add blog
          </h2>
          <form onSubmit={handleNewBlog} className=" md:px-32 lg:px-80">
            {/* 1st row */}
            <div className=" gap-5">
              <div className="mb-4">
                <Input
                  color="blue"
                  className="text-black"
                  name="title"
                  variant="standard"
                  label="Blog Title "
                  placeholder="Type here.."
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  color="blue"
                  name="image"
                  variant="standard"
                  label="Image Link"
                  placeholder="Type here.."
                  required
                />
              </div>
            </div>
            {/* 3rd row */}{" "}
            <div className="mb-4">
              <Select
                color="blue"
                required
                name="type"
                variant="standard"
                label="Select blog type"
                value={blogType}
                onChange={(selectedValue) => {
                  setBlogType(selectedValue);
                }}
              >
                <Option value="Finance">Finance</Option>
                <Option value="Banking">Banking</Option>
                <Option value="Remittance">Remittance</Option>
                <Option value="Loan">Loan</Option>
                <Option value="Bank Account">Bank Account</Option>
              </Select>
            </div>
            <div className="mb-4">
              <Textarea
                color="blue"
                name="post"
                variant="standard"
                label="Write your post "
                required
              />
            </div>
            <div>
              <div className="flex">
                <button
                  type="submit"
                  className=" font-medium justify-center w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;

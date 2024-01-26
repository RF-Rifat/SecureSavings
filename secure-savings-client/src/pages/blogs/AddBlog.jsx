import toast from "react-hot-toast";
import { modifyData } from "../../Hooks/Api";
import { useContext } from "react";
import { AuthProvider } from "../../Authentication/AuthProvider";
const AddBlog = () => {
  const { user } = useContext(AuthProvider);

  const handleNewBlog = async (e) => {
    e.preventDefault();

    const form = e.target;
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    const newBlog = {
      name: user?.displayName,
      title: form.title.value,
      type: form.type.value,
      date: formattedDate,
      authorImage: user?.photoURL,
      blogImage: form.image.value,
      post: form.post.value,
    };

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
      <div className="bg-blue-gray-300 dark:bg-dark border rounded-lg px-8 py-6 mx-auto my-8">
        <h2 className="text-2xl font-medium mb-4 text-center">Add blog</h2>
        <form onSubmit={handleNewBlog} className="md:px-32 lg:px-80">
          {/* 1st row */}

          <div className="flex justify-center gap-5">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Blog Title
              </label>
              <input
                type="text"
                placeholder="Blog title"
                id="title"
                name="title"
                className="border text-black border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Blog Image
              </label>
              <input
                type="text"
                placeholder="Photo link"
                id="image"
                name="image"
                className="border text-black border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="">
            {" "}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Blog Type
              </label>
              <select
                id="type"
                name="type"
                className="border w-full border-gray-400 text-black p-2  rounded-lg focus:outline-none focus:border-blue-400"
                required
              >
                <option value="default">Select blog type</option>
                <option value="Finance">Finance</option>
                <option value="Banking">Banking</option>
                <option value="Remittance">Remittance</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Write your blog
            </label>
            <textarea
              id="post"
              name="post"
              className="border text-black border-gray-400 p-2  w-full rounded-lg focus:outline-none focus:border-blue-400"
              rows="4"
              cols="4"
            ></textarea>
          </div>

          <div>
            <div className="flex">
              <button
                type="submit"
                className=" justify-center w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;

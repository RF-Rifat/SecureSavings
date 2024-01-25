const AddBlog = () => {
  const handleNewBlog = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const date = form.date.value;
    const image = form.image.value;
    const post = form.post.value;
    const type = form.name.value;

    const newBlog = {
      name,
      title,
      type,
      date,
      image,
      post,
    };
    console.log(newBlog);
  };
  return (
    <div>
      <div className="bg-blue-gray-300 dark:bg-dark border rounded-lg px-8 py-6 mx-auto my-8">
        <h2 className="text-2xl font-medium mb-4 text-center">Add blog</h2>
        <form onSubmit={handleNewBlog}>
          {/* 1st row */}
          <div className="flex justify-center items-center gap-5">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Author Name
              </label>
              <input
                type="text"
                placeholder="Author Name"
                id="name"
                name="name"
                className="border border-gray-400 p-2  w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Author Image
              </label>
              <input
                type="text"
                placeholder="Author Image"
                id=""
                name="authorImg"
                className="border border-gray-400 p-2  w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          {/* 2nd row */}
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
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
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
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="flex justify-center gap-5">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Date
              </label>
              <input
                type="date"
                placeholder="Blog title"
                id="date"
                name="date"
                className="border border-gray-400 p-2  md:w-[200px] rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Blog Type
              </label>
              <select
                id="type"
                name="type"
                className="border border-gray-400 p-2  md:w-[200px] rounded-lg focus:outline-none focus:border-blue-400"
                required
              >
                <option value="default">Select blog type</option>
                <option value="male">Finance</option>
                <option value="female">Banking</option>
                <option value="other">Remitence</option>
              </select>
            </div>
          </div>

          <div className="mb-4 flex-row max-w-[430px] mx-auto">
            <label className="block text-gray-700 font-medium mb-2">
              Write your blog
            </label>
            <textarea
              id="post"
              name="post"
              className="border border-gray-400 p-2  w-full rounded-lg focus:outline-none focus:border-blue-400"
              rows="5"
            ></textarea>
          </div>
          <div>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
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

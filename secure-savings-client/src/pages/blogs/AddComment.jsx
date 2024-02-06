import { Button, Textarea } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthProvider } from "../../Authentication/AuthProvider";

const AddComment = ({ id }) => {
  const { user } = useContext(AuthProvider);

  // add comment
  const handleAddComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const currentDate = new Date();

    const newComment = {
      name: user?.displayName,
      date: currentDate,
      comment: form?.comment?.value,
      blogId: id,
    };
    console.log("added", newComment);
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold">Leave a Comment</h1>
      <form onSubmit={handleAddComment} className="relative mt-5  md:w-[32rem]">
        <Textarea
          name="comment"
          required
          color="blue"
          variant="outlined"
          label="Your Comment"
          className="text-black dark:text-white"
        />
        <div className="flex w-full justify-between py-1.5">
          {/* <IconButton variant="text" color="blue-gray" size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </IconButton> */}
          <div className="flex gap-2">
            {/* <Button size="sm" color="red" variant="text" className="rounded-md">
              Cancel
            </Button> */}
            <Button
              type="submit"
              size="sm"
              className="rounded-md bg-blue-500 hover:bg-blue-800"
            >
              Post Comment
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddComment;

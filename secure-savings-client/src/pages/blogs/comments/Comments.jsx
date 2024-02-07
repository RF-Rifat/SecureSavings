import { useEffect, useState } from "react";
import useComment from "../../../Hooks/useComment";
import Spinner from "../../../Shared/Spinner";

const Comments = ({ id }) => {
  const [comments] = useComment();
  const [filterComment, setComment] = useState("");
  // console.log("comments", comments);

  // filter specific comment for specific blog
  useEffect(() => {
    const filtered = comments?.filter((c) => {
      return c?.blogId == id;
    });
    setComment(filtered);
  }, [comments, id]);
  // if (isPending) {
  //   return <Spinner></Spinner>;
  // }
  // console.log(comment);
  return (
    <div>
      <div>
        {filterComment?.length > 0 ? (
          <h2 className="mt-5 text-xl font-semibold">
            {filterComment?.length} Comment
          </h2>
        ) : (
          <h3 className="mt-5 text-xl font-semibold">No comment.</h3>
        )}
      </div>
      <div>
        {filterComment?.map((c) => (
          <div key={c._id} className="flex  items-center gap-4 py-5">
            <img className="w-20 rounded-md" src={c?.photo} alt="" />
            <div className="">
              <h5 className="text-xl font-semibold">{c?.name}</h5>
              <p className="text-blue-600 text-lg">{c?.date}</p>
              <h5 className="text-xl  text-black">{c?.comment}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

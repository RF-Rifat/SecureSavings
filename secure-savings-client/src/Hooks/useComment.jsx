import { useQuery } from "@tanstack/react-query";

// get all comments
const useComment = () => {
  const {
    isPending,
    error,
    data: comments,
    refetch,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      fetch("http://localhost:5000/api/comment").then((res) => res.json()),
  });

  return [comments, refetch, isPending, error];
};

export default useComment;

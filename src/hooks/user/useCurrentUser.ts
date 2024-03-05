import { getCurrentUser } from "@/services/user/getCurrentUser";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useCurrentUser = () => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries(["user"]);

  const { data: user, isLoading: userIsLoading } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });
  return {
    user,
    userIsLoading,
  };
};

export default useCurrentUser;

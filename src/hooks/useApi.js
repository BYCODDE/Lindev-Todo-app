import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/apitodos";

const useApi = () => {
  const { isLoading, error, data, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchData,
    staleTime: 0,
  });

  return { isLoading, error, data, isError };
};

export default useApi;

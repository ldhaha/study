import { useNavigate, useSearchParams } from "react-router-dom";
export function useRoute() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  return {
    navigate,
    searchParams,
    setSearchParams,
  };
}

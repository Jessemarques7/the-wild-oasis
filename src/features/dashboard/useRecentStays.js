import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export default function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("user"));

  const queryDate = subDays(Date(), numDays).toISOString();

  const { isPending, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", [`last-${numDays}`]],
  });

  const confirmedStays = stays?.filter(
    (stays) => stays.status === "checked-in" || stays.status === "checked-out"
  );

  return { confirmedStays, stays, isPending, numDays };
}

import { data } from "../../hook/useFetchSingleItem/type";

export type Props = {
  pending: boolean;
  error: string | null;
  data?: data;
};

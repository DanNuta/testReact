import { DataDbType } from "../../hook/useFetch/useFetchType";

export type Props = {
  data: DataDbType[];
  pending: boolean;
  error: string | null;
};

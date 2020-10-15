import dayjs from "dayjs";
import "dayjs/locale/ja";

type Props = { dateString: string };
export default function Date({ dateString }: Props) {
  const date = dayjs(dateString).locale("ja").format("YYYY-MM-DD HH:mm");
  return <time dateTime={dateString}>{date}</time>;
}

import dayjs from "dayjs";
import "dayjs/locale/ja";

export default function Date({ dateString }) {
  const date = dayjs(dateString).locale("ja").format("YYYY-MM-DD HH:mm");
  return <time dateTime={dateString}>{date}</time>;
}

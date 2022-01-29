import { useGetVersionQuery } from "../../api/version";
import ReactHtmlParser from "react-html-parser";

export default function Version() {
  const { data, error, isLoading } = useGetVersionQuery();
  if (!data?.data) return <></>;
  console.log(data.data[0].attributes.content);
  return (
    <>
      <div>
        <div>{data.data[0].attributes.title}</div>
        {ReactHtmlParser(data.data[0].attributes.content)}
      </div>
    </>
  );
}

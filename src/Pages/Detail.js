import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import Error from "../common-components/Error";
import { baseUrl } from "../api";
import Comments from "../components/Comments";
import Cards from "../common-components/Cards";

export default function Detail() {
  const { sectionType, number } = useParams();
  const { data, loading, error } = useFetchData(
    `${baseUrl}/${sectionType}/${number}`
  );

  if (error.state) return <Error message={error.message} />;
  return (
    <>
      {loading && <div className="loader"></div>}
      <h1>#{} Details</h1>
      {data?.body !== null ? (
        <Cards>{data?.body}</Cards>
      ) : (
        <Cards>No details found</Cards>
      )}
      <Comments />
    </>
  );
}

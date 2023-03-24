import { Card, CardContent, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import Error from "../common-components/Error";
import { baseUrl } from "../api";
import Cards from "../common-components/Cards";

export default function Comments() {
  const { sectionType, number } = useParams();
  const { data, loading, error } = useFetchData(
    `${baseUrl}/${sectionType}/${number}/comments`
  );

  if (error.state) return <Error message={error.message} />;
  return (
    <>
      {loading && <div className="loader"></div>}
      {data.length > 0 ? (
        <h1>{data.length >= 5 ? `Top ${5}` : `Top ${data.length}`} Comments</h1>
      ) : (
        <h1>Comments</h1>
      )}
      {data.length > 0 ? (
        data.slice(0, 5).map((comment) => (
          <Card key={comment.id} style={{ marginBottom: "20px" }}>
            <CardContent>
              <Typography variant="h6">{comment.user.login}</Typography>
              <Typography variant="body1">{comment.body}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Cards>No comments found</Cards>
      )}
    </>
  );
}

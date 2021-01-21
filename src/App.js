import React, { useState } from "react";
import "./App.css";
import useFetchJobs from "./hooks/useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./components/Job/Job";
import JobsPagination from "./components/JobsPagination/JobsPagination";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  return (
    <Container className="my-4">
      <h1 className="mb-4">Github Jobs</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing</h1>}
      <JobsPagination page={page} setPage={setPage} hasNextPage={true} />
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;

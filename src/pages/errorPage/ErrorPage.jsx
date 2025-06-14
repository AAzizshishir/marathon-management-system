import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      Page Not Found
    </div>
  );
};

export default ErrorPage;

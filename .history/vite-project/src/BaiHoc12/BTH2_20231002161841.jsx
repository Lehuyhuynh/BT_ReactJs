import { useEffect, useState } from "react";

function BTH2() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);
  const Loading = () => {
    return <div className="loader">jasdjasj</div>;
  };
  return <div className="container">{isLoading && <Loading />}</div>;
}
export default BTH2;

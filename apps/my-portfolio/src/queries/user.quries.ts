import { QueryKeys } from "./keys/query-keys";



export const portfolioQuery = () =>({
  queryKey:[QueryKeys.PORTFOLIO],
  queryFn: () =>
       httpTest()
});

export const httpTest =async ()=>
{
    const res = await fetch('http://localhost:3331/api/subscriber/list');
  const httpServer = await res.json();

  if (!httpServer) {
    return {
      notFound: true,
    };
  }

  return httpServer;
}

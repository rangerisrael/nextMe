import { QueryKeys } from "./keys/query-keys";



export const portfolioQuery = () =>({
  queryKey:[QueryKeys.PORTFOLIO],
  queryFn: () =>
       httpTest()
});

export const httpTest =async ()=>
{
    const res = await fetch('http://localhost:3334/api/portfolio')
  const tesdatas = await res.json();

  if (!tesdatas) {
    return {
      notFound: true,
    };
  }

  return tesdatas;
}

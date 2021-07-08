import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { portfolioQuery } from '../queries/user.quries';
import styles from './index.module.scss';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */


  const { data: stores, isLoading } =  useQuery(portfolioQuery());

console.log(stores);



  return (
    <div className={styles.page}>
      {/* <Test testdatas={tesdatas} /> */}
    </div>
  );
}


export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(portfolioQuery());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Index;





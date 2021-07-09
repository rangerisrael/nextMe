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

  const { data: list, isLoading } = useQuery(portfolioQuery());

  console.log(list);

  return (
    <div className={styles.page}>
      <table>
        <br />
        <tr>
          <th>#</th>
          <th>FullName</th>
          <th>Email</th>
          <th>PhoneNumber</th>
        </tr>
        {list.map((data, i) => (
          <>
            <br />
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.fullName}</td>
              <td>{data.email}</td>
              <td>{data.phoneNumber}</td>
            </tr>
          </>
        ))}
      </table>
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

import { getSession } from 'next-auth/client';
import React from 'react';
import CreateNewWork from '../../../components/crud/CreateNewWork';

const CreateBlog = () => {
  return (
    <>
      <CreateNewWork />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default CreateBlog;

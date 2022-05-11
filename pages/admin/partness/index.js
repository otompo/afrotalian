import { getSession } from 'next-auth/client';
import ManagePartness from '../../../components/admin/ManagePartness';

const Index = () => {
  return (
    <>
      <ManagePartness />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session || !session.user.role.includes('Admin')) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
export default Index;

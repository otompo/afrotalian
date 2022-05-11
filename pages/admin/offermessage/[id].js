import { getSession } from 'next-auth/client';
import SingleOfferMessage from '../../../components/admin/SingleOfferMessage';

const Index = () => {
  return (
    <>
      <SingleOfferMessage />
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

import ManageWorks from '../../components/admin/ManageWorks';
import { getSession } from 'next-auth/client';
const OurWorksIndex = () => {
  return (
    <>
      <ManageWorks />
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
export default OurWorksIndex;

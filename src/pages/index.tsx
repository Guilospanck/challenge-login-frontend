import Head from 'next/head';

import Login from './login';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Challenge Login - Frontend - Wiser</title>
      </Head>

      <main>
        <Login />
      </main>

    </div>
  )
};

export default Home;

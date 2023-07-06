import React from 'react';
import Layout from '../components/Layout';
import Works from '../components/elements/recent_work';

const App = () => {
  return (
    <Layout parent="Home" sub="works" parentURL="/" title='Our Works'>
            <section className='mt-14'>
                <Works />
            </section>
    </Layout>
  );
};

export default App;
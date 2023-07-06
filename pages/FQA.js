import React from 'react';
import Layout from '../components/Layout';
import FQA from '../components/elements/FAQ';

const App = () => {
  return (
    <Layout parent="Home" sub="team" parentURL="/" title='Frequently Asked Questions'>
            <section className='mt-14'>
                <FQA />
            </section>
    </Layout>
  );
};

export default App;
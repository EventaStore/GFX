import React from 'react';
import Layout from "../components/Layout";
import Ourteam from '../components/elements/team'

const App = () => {
    return (
        <Layout parent="Home" sub="team" parentURL="/" title='Our Team'>
            <section className='mt-14'>
                <Ourteam />
            </section>
        </Layout>
    );
};

export default App;

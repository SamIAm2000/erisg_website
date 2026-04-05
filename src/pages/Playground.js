import React from 'react';
import Layout from '../components/layout/Layout';

function Playground() {
  return (
    <Layout>
      <div className="eris-bodycopy max-w-[50rem]">
        <p>
          This page will mirror{' '}
          <a href="https://erisgao.com/playground-1" target="_blank" rel="noopener noreferrer">
            erisgao.com/playground-1
          </a>
          . For now, use the live site.
        </p>
      </div>
    </Layout>
  );
}

export default Playground;

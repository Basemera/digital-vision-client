import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Shows from './shows';

export default function Pages() {
  return (
    <Fragment>
      {/* <PageContainer> */}
        <Router primary={false} component={Fragment}>
          <Shows path="/" />
          {/* <Show path="show/:showId" /> */}
        </Router>
      {/* </PageContainer> */}
    </Fragment>
  );
}
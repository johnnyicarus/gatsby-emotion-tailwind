/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Banner from '../Banner/index';
import { css } from 'emotion'

const Layout = ({ children }) => (
  <div>
    <Banner>Logo</Banner>
    <main className={css(tw('mx-auto max-w-md lg:max-w-lg xl:max-w-xl'))}>
      {children}
    </main>
  </div>
);

export default Layout;
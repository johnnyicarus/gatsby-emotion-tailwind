/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import { css } from 'emotion';

const Banner = ({ children }) => (
  <header className={css(tw('bg-purple shadow w-full fixed pin-t'))}>
    <div className={css(tw('mx-auto p-1 max-w-md lg:max-w-lg xl:max-w-xl'))}>
      {children}
    </div>
  </header>
);

export default Banner;
import React from 'react';

import { expect } from 'chai';
import { StaticRouter } from 'react-router';

import NotFoundPage from '../../../../../../src/views/containers/pages/not_found_page/not_found_page';

import Enzyme from '../../../../utils/enzyme_adapter_util';

const { mount } = Enzyme;

describe('A suite for not-found page', function() {
  /*
   it('contains the correct class', function correctClass() {
    expect(
      shallow(<StaticRouter context={{}}><NotFoundPage /></StaticRouter>).find(
        '.not-found'
      )
    ).to.equal(1);
  });
   */

  it('contains spec with an expectation', function() {
    expect(
      mount(
        <StaticRouter context={{}}>
          <NotFoundPage />
        </StaticRouter>
      ).find('.not-found').length
    ).to.equal(1);
  });
});

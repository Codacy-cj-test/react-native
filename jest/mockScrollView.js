/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

/* eslint-env jest */

'use strict';

const React = require('react');
const View = require('../Libraries/Components/View/View');

import requireNativeComponent from '../Libraries/ReactNative/requireNativeComponent';
const RCTScrollView: $FlowFixMe = requireNativeComponent('RCTScrollView');

function mockScrollView(BaseComponent: $FlowFixMe) {
  class ScrollViewMock extends BaseComponent {
    render(): React.Element<typeof RCTScrollView> {
      return (
        <RCTScrollView {...this.props}>
          {this.props.refreshControl}
          <View>{this.props.children}</View>
        </RCTScrollView>
      );
    }
  }
  return ScrollViewMock;
}

module.exports = (mockScrollView: $FlowFixMe);

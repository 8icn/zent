import React, { Component } from 'react';
import cx from 'zent-utils/classnames';

import PropTypes from 'zent-utils/prop-types';

import Item from './Item';

export default class Breadcrumb extends Component {
  static propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    breads: PropTypes.array
  };

  static defaultProps = {
    prefix: 'zent',
    className: '',
    breads: []
  };

  render() {
    const { prefix, className, children = null, breads } = this.props;

    return (
      <div className={cx(`${prefix}-breadcrumb`, className)}>
        {children}
        {breads && breads.length > 0 && breads.map((item, index) => {
          return <Item {...item} key={index} />;
        })}
      </div>
    );
  }
}

Breadcrumb.Item = Item;

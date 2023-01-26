import React from 'react';

const PageHeader = props => (
  <header className='pageHeader'>
    <i className='fa fa-calendar-check-o'></i>{props.name} <small>{props.small}</small>
  </header>
);

export default PageHeader;

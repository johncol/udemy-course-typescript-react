import React from 'react';

import './loader.css';

interface Props {
  when?: boolean;
}

export const Loader = (props: Props) => {
  if (!props.when) {
    return null;
  }

  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

import React, { ReactNode } from 'react';

type WrapperPropsType = {
  children: ReactNode;
};

function Wrapper(props: WrapperPropsType) {
  return <div>{props.children}</div>;
}

export default Wrapper;

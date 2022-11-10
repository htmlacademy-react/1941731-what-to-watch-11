import {Link} from 'react-router-dom';
import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';

function Error404() {

  return(
    <Wrapper>
      <h2>
        404 Not Found
      </h2>
      <Link to="/">
        Вернуться на главную
      </Link>
    </Wrapper>
  );
}

export default Error404;

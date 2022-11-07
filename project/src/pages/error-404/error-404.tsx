import {Link} from 'react-router-dom';
import React from 'react';

function Error404() {

  return(
    <React.Fragment>
      <h2>
        404 Not Found
      </h2>
      <Link to="/">
        Вернуться на главную
      </Link>
    </React.Fragment>
  );
}

export default Error404;

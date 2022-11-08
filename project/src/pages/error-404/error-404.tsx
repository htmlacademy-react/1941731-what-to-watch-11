import {Link} from 'react-router-dom';
import React from 'react';

function Error404() {

  return(
    <div>
      <h2>
        404 Not Found
      </h2>
      <Link to="/">
        Вернуться на главную
      </Link>
    </div>
  );
}

export default Error404;

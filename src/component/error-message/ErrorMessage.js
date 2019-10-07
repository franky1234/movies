import React from 'react';

const ErrorMessage = ({ message, borderStyle }) => {
  return (
    <div className={`${borderStyle} container-movie-list`}>
      <div className="movie-item">
        {message}
      </div>
    </div>
  );
};

export default ErrorMessage;
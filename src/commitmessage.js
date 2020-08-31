import React from 'react';
import PropTypes from 'prop-types';

const CommitMessage = ({ commit }) => (
  <React.Fragment>
    { commit.message }
  </React.Fragment>
);

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};

export default CommitMessage;

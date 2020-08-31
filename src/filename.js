import React from 'react';
import PropTypes from 'prop-types';

function FileIcon({ file }) {
  let icon = 'far fa-file';
  if (file.type === 'folder') {
    icon = 'fa fa-folder';
  }

  return (
    <span className="file-icon">
      <i className={ icon } />
    </span>
  );
};

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

function FileName({ file }) {
  return (
    <React.Fragment>
      <FileIcon file={ file } />
      <span className="file-name">{ file.name }</span>
    </React.Fragment>
  );
};

FileName.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileName;

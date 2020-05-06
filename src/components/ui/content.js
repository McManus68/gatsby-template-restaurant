import React from 'react'
import PropTypes from 'prop-types'

import style from './content.module.scss'

const Content = ({ children }) => {
  return <div className={style.content}>{children}</div>
}

export default Content

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }}  style={{whiteSpace: "pre-wrap"}} />
)

const Content = ({ content, className }) => (
  <div className={className}  style={{whiteSpace: "pre-wrap"}}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content

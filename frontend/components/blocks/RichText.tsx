import React from 'react';
import ReactMarkdown from 'react-markdown';

const RichText = ({ props }: any) => {
  return <ReactMarkdown >{props.text}</ReactMarkdown>
};

export default RichText;
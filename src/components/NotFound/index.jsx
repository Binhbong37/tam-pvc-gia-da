import React from 'react';
import { Empty } from 'antd';

const NotFound = () => {
  return (
    <div>
      <Empty />
      <h3 style={{textAlign:"center"}}>Không có gì để tìm ở đây!</h3>
    </div>
  )
}

export default NotFound
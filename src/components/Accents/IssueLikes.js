import React, { useState } from 'react';

// Ant Design
import { Tooltip } from 'antd';
import { LikeOutlined, LikeFilled } from '@ant-design/icons';

const IssueLikes = (props) => {

    const [likes, setLikes] = useState(0);

    let action = ''

    const like = () => {
        setLikes(likes + 1)
    };

    return (
        <>
        <Tooltip title="Like">
          {React.createElement(action === 'liked' ? LikeFilled : LikeOutlined, {
            onClick: like,
          })}
        </Tooltip>
        <span className="comment-action">{likes}</span>
        </>
    )
}

export default IssueLikes
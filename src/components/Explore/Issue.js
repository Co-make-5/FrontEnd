import React, { useState } from 'react';
import { Card, Badge, Modal, Button } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';


const Issue = ({issue}) => {
    // count displays upvotes as badge on card
    const [likes, setLikes] = useState(0);
    //state for modal
    const [visible, setVisible] = useState(false);
    // opens modal
    const showModal = () => {
        setVisible(true);
    };
    // closes modal
    const handleCancel = e => {
        setVisible(false);
    };

    const updateLikes = type => {
        type === 'like' ? setLikes(likes + 1) : setLikes(likes - 1)

    }

    // 150 is the current size

    return (
        <div>
            <Badge count={likes}>
                <Card
                style={{ width: '280px', height: '240px'}}
                // style={{height: '240px'}}
                    actions={[
                        // update onClicks here to increase or decrease upvotes when user clicks on corresponding button
                        <MinusCircleOutlined key="minus" onClick={e => updateLikes('dislike')} />,
                        <PlusCircleOutlined key="plus" onClick={e => updateLikes('like')} />
                    ]}
                >
                    <Card.Meta
                        title={issue.issue_name.length > 20 ? issue.issue_name.slice(0, 13) : issue.issue_name}
                        description={issue.location}
                    />
                    <p style={{paddingTop: '30px', width: '200', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{issue.description}</p>
                    <Button onClick={showModal} style={{ display: "block", margin: "20px auto 0" }}>
                        View Details
                    </Button>
                    <Modal
                        title="Fix pothole on 10th Street"
                        visible={visible}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="back" onClick={handleCancel}>
                                Close
                            </Button>
                        ]}
                    >
                        <p>Community: Zip/Location</p>
                        <p>There's a huge pothole at 10th &amp; Jefferson that's causing unsafe driving conditions. This needs to be filled immediately. Lives are at stake here.</p>
                        <p>Submitted by: John Smith</p>
                    </Modal>
                </Card>
            </Badge>
        </div>
    );
} 



export default Issue;
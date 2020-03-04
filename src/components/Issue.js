import React, { useState, useEffect } from 'react';
import { Card, Badge, Modal, Button } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined, EllipsisOutlined } from '@ant-design/icons';


const Issue = (props) => {

    // count displays upvotes as badge on card
    let count = 3;

    //state for modal
    const [visible, setVisible] = useState(false);

    // opens modal
    let showModal = () => {
        setVisible(true);
    };

    // closes modal
    let handleCancel = e => {
        setVisible(false);
    };

    return (
        <div style={{margin: "20px", width: "30%"}}>
            <Badge count={count}>
                <Card
                    // style={{ width: 300}}
                    actions={[
                        // update onClicks here to increase or decrease upvotes when user clicks on corresponding button
                        <MinusCircleOutlined key="minus" onClick={showModal} />,
                        <PlusCircleOutlined key="plus" onClick={showModal} />
                    ]}
                >
                    <Card.Meta 
                        style={{ height: "100px", overflow: "hidden"}}
                        title="Fix pothole on 10th Street"
                        description="There's a huge pothole at 10th &amp; Jefferson that's causing unsafe driving conditions. This needs to be filled immediately. Lives are at stake here." 
                    />
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
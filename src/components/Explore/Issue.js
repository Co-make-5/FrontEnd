import React, { useState, useEffect } from "react";
import { Card, Badge, Modal, Button } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import Tags from "../Accents/Tags";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const Issue = ({ issue }) => {
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
    type === "like" ? setLikes(likes + 1) : setLikes(likes - 1);
  };

  // 150 is the current size

  // Set's state for user's name & id
  const [name, setName] = useState("");
  const [id] = useState(issue.user_id);

  // Axios Call to Get User's Name in Modal
  useEffect(() => {
    axiosWithAuth().get(`https://comake-backend.herokuapp.com/api/users/${id}`)
    .then(response => {
      // console.log("Response, User Name:", response.data[0]["name"])
      setName(response["data"][0]["name"])
    })
    .catch(err => console.log("Error getting user info:", err))
  }, [])


  return (
    <div>
      <Badge count={likes}>
        <Card
          style={{ width: 300, height: "240px" }}
          actions={[
            // update onClicks here to increase or decrease upvotes when user clicks on corresponding button
            <DislikeOutlined
              style={{fontSize: "20px", color: "#ff4d4f"}}
              key="minus"
              onClick={e => updateLikes("dislike")}
            />,
            <LikeOutlined
              style={{fontSize: "20px", color: "#52c41a"}} 
              key="plus" 
              onClick={e => updateLikes("like")} 
            />
          ]}
        >
          <Card.Meta
            title={
              issue.issue_name.length > 20
                ? issue.issue_name.slice(0, 13)
                : issue.issue_name
            }
            description={<Tags solved={issue.solved} />}
          />
          <p style={{ 
            color: "#8c8c8c",
            paddingTop: "20px",
            marginBottom: "4px"
            }}>
              {`Location: ${issue.location !== "" ? issue.location : issue.zip}`}
          </p>
          <p
            style={{
              width: "200",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {issue.description}
          </p>
          <Button
            onClick={showModal}
            style={{ display: "block", margin: "20px auto 0" }}
          >
            View Details
          </Button>
          <Modal
            title={issue.issue_name}
            visible={visible}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Close
              </Button>
            ]}
          >
            <p><Tags solved={issue.solved} /></p>
            <p>Location: {issue.zip}</p>
            <p>{issue.description}</p>
            <p>Submitted by: {name !== null ? name : "Anonymous"}</p>
          </Modal>
        </Card>
      </Badge>
    </div>
  );
};

export default Issue;

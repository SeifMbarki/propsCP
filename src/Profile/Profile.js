import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

const Profile = (props) => {
  props.handleName(props.fullName.name);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {props.children}
        <Card.Body>
          <Card.Title>
            {props.fullName.name} {props.fullName.LastName}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.profession}
          </Card.Subtitle>
          <Card.Text>{props.bio}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
// Set default props
Profile.defaultProps = {
  fullName: { name: "noname", LastName: "noname" },
  profession: "NoProfession",
  bio: "NoBio",
};
//setting prop types
Profile.propTypes = {
  fullName: PropTypes.object,
  profession: PropTypes.string,
  bio: PropTypes.string,
};
export default Profile;

import "./index.css";
import { Form, Button } from "react-bootstrap";
export const Header = () => {
  return (
    <div className="header">
      <div className="sidebar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8028/8028296.png"
          alt="menue"
          style={{ width: "50%", height: "80%" }}
        />
      </div>
      <h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1383/1383260.png"
          alt="yt"
        />
        YouTube
      </h1>
      <div className="search">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    </div>
  );
};

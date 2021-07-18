import React from "react";
import { Button} from "antd";
import {
  UnorderedListOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const OptionsView = ({onChangeView}) => {
    return ( 
        <div className="patients-view-buttons">
        <Button
          className="view-btn"
          onClick={() => onChangeView("structure", "list")}
        >
          <UnorderedListOutlined />
        </Button>
        <Button
          className="view-btn"
          onClick={() => onChangeView("structure", "card")}
        >
          <AppstoreOutlined />
        </Button>
        <Button
          className="view-btn"
          onClick={() => onChangeView("number", 5)}
        >
          5
        </Button>
        <Button
          className="view-btn"
          onClick={() => onChangeView("number", 10)}
        >
          10
        </Button>
        <Button
          className="view-btn"
          onClick={() => onChangeView("number", 15)}
        >
          15
        </Button>
      </div>

     );
}
 
export default OptionsView;
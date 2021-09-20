import React from "react";
import MenuItem from "../../components/menu-item/menu-item.component";
import { sections } from "./directory.data";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, linkUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;

// Packages
import React from "react";

export default function CategoryHeading({
  category
}: any): React.ReactElement {

  return (
      <div className="heading-container">
        <label className="category">
          {category}
        </label>
      </div>
  );
}

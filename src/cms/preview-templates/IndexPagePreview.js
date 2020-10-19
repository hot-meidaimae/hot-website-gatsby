import React from "react";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        photos={data.photos.map((el) => getAsset(el))}
        heading={data.heading}
        mainpitch={data.mainpitch}
        description={data.description}
        intro={data.intro}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;

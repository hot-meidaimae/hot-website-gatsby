import React from "react";
import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview: React.FC<PreviewTemplateComponentProps> = ({
  entry,
  getAsset,
}) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image).toString()}
        slideImages={(data.slideImages as string[]).map((el: any) =>
          getAsset(el.image).toString()
        )}
        heading={data.heading}
        mainpitch={data.mainpitch}
        description={data.description}
        intro={data.intro}
        newcomerHeading={data.newcomerHeading}
        newcomerImage={data.newcomerImage}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;

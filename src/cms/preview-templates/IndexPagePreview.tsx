import React from "react";
import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { IndexPageTemplate } from "../../templates/index-page";

type Props = {
  image: string;
  slideImages: { image: string }[];
  newcomerHeading: string;
  newcomerImage: string;
  heading: string;
  mainpitch: { title: string; description: string };
  description: string;
  intro: {
    name: string;
    text: string;
    image: string;
  }[];
};

const IndexPagePreview: React.FC<PreviewTemplateComponentProps> = ({
  entry,
  getAsset,
}) => {
  const data = entry.getIn(["data"]).toJS() as Props;

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image).toString()}
        slideImages={data.slideImages.map((el) =>
          getAsset(el.image).toString()
        )}
        heading={data.heading}
        mainpitch={data.mainpitch}
        description={data.description}
        intro={data.intro.map((el) => ({
          name: el.name,
          text: el.text,
          image: getAsset(el.image).toString(),
        }))}
        newcomerHeading={data.newcomerHeading}
        newcomerImage={getAsset(data.newcomerImage).toString()}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;

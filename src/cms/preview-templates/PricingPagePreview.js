import React from "react";
import { PricingPageTemplate } from "../../templates/pricing-page";

const PricingPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <PricingPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        description={data.description}
        pricing={data.servicePricing}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default PricingPagePreview;

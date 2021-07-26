import React from "react";
import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { PricingPageTemplate } from "../../templates/pricing-page";

type Props = {
  title: string;
  image: string;
  servicePricing: {
    name: string;
    boothPrice: number;
    boothPriceTax: number;
    openPrice: number;
    openPriceTax: number;
  }[];
  showerPricing: {
    name: string;
    price: number;
  }[];
  description: string;
  showerDescription: string;
};

const PricingPagePreview: React.FC<PreviewTemplateComponentProps> = ({
  entry,
  getAsset,
}) => {
  const data = entry.getIn(["data"]).toJS() as Props;

  if (data) {
    return (
      <PricingPageTemplate
        image={getAsset(data.image).toString()}
        title={data.title}
        servicePricing={data.servicePricing}
        showerPricing={data.showerPricing}
        description={data.description}
        showerDescription={data.showerDescription}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default PricingPagePreview;

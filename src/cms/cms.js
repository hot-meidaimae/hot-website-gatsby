import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import PricingPagePreview from "./preview-templates/PricingPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("pricing", PricingPagePreview);

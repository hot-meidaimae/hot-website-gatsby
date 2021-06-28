import CMS from "netlify-cms-app";
import { ja } from 'netlify-cms-locales';

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import PricingPagePreview from "./preview-templates/PricingPagePreview";

CMS.registerLocale('ja', ja);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("pricing", PricingPagePreview);

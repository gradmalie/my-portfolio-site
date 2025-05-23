import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

// This config lets Netlify's Visual Editor understand your folders
export default defineStackbitConfig({
  stackbitVersion: "~0.7.0",
  contentSources: [
    new GitContentSource({
      // All Markdown lives under /src/content
      rootPath: "src/content",

      // Describe ONE collection: "portfolio"
      models: [
        {
          name:   "portfolio",          // arbitrary label
          path:   "portfolio",          // sub-folder inside rootPath
          match:  "*.md",               // any markdown file
          fields: [
            { name: "title",       type: "string" },
            { name: "description", type: "text"   },
            { name: "url",         type: "string" },
            { name: "personas",    type: "list",  items: { type: "string" } },

            // This lets the editor show an image uploader
            { name: "image",       type: "image",
              assetPath: "public/images/portfolio" }
          ]
        }

        // (Optionally add a second model for /blog later)
      ]
    })
  ]
});

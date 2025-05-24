import { defineStackbitConfig } from '@stackbit/types';

// stackbit.config.ts
export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',

  contentSources: [
    {
      /** ← tell the dev server which adapter to load */
      type: '@stackbit/cms-git',

      /** ← MUST be present or you’ll get the “join undefined” crash */
      rootPath: '.',                    // repo root

      /** optional, but keeps images tidy */
      assets: {
        referenceType: 'relative',
        uploadDir:   'public/images/portfolio',
        publicPath:  '/images/portfolio',
      },

      /** describe the markdown collection that lives under src/content/ */
      models: [
        {
          name:  'portfolio',
          path:  'src/content/portfolio',   // relative to rootPath
          match: '*.md',
          fields: [
            { name: 'title',       type: 'string' },
            { name: 'description', type: 'text'   },
            { name: 'url',         type: 'string' },
            { name: 'personas',    type: 'list',  items: { type: 'string' } },
            { name: 'image',       type: 'image' },
          ],
        },
      ],
    },
  ],
});

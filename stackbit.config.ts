import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',

  contentSources: [
    {
      type: '@stackbit/cms-git',
      rootPath: 'src/content',          // ✅ now guaranteed to reach the SDK
      assets: {
        referenceType: 'relative',
        uploadDir: 'public/images/portfolio',
        publicPath: '/images/portfolio',
      },
      models: [
        {
          name: 'portfolio',
          path: 'portfolio',
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

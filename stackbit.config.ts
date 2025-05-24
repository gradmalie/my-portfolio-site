// stackbit.config.ts – final working version
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource }   from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',

  contentSources: [
    new GitContentSource({
      rootPath: '.',                      // MUST be present
      assets: {
        referenceType: 'relative',
        uploadDir:  'public/images/portfolio',
        publicPath: '/images/portfolio',
      },
      models: [
        {
          name:  'portfolio',
          path:  'src/content/portfolio', // folder that holds the markdown
          match: '*.md',
          fields: [
            { name: 'title',       type: 'string' },
            { name: 'description', type: 'text'   },
            { name: 'url',         type: 'string' },
            { name: 'personas',    type: 'list', items: { type: 'string' } },
            { name: 'image',       type: 'image' },
          ],
        },
      ],
    }),
  ],
});

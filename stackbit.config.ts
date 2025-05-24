// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource }   from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~1.0.0',        // ← NEW major version line

  contentSources: [
    new GitContentSource({
      rootPath: '.',                // keep project-root

      assets: {
        referenceType: 'relative',
        uploadDir:  'public/images/portfolio',
        publicPath: '/images/portfolio'
      },

      models: [
        {
          name:  'portfolio',
          path:  'src/content/portfolio',   // folder with your .md files
          match: '*.md',

          fields: [
            { name: 'title',       type: 'string' },
            { name: 'description', type: 'text'   },
            { name: 'url',         type: 'string' },
            { name: 'personas',    type: 'list',  items: { type: 'string' } },
            { name: 'image',       type: 'image' }
          ]
        }
      ]
    })
  ]
});

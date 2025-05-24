import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource }   from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',

  contentSources: [
    new GitContentSource({
      // the root of the git repo (leave as '.')
      rootPath: '.',

      // files live in src/content/portfolio/*.md
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
            { name: 'image',       type: 'image',
              assetPath: 'public/images/portfolio' },
          ],
        },
      ],
    }),
  ],
});

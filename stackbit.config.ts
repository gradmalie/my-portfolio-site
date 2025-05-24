// stackbit.config.ts  – compatible with Stackbit SDK 2 + cms-git 1.x
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource }    from '@stackbit/cms-git';

export default defineStackbitConfig({
  /*  The SDK major version must match your @stackbit/* packages.
      "~2.0.0" means “any 2.x release, but not 3.x”.                  */
  stackbitVersion: '~2.0.0',

  contentSources: [
    new GitContentSource({
      /* Where the markdown files actually live in the repo */
      rootPath: 'src/content',

      /* Optional – tells the editor where to place uploaded images */
      assets: {
        referenceType: 'relative',          // store relative paths
        uploadDir   : 'public/images/portfolio',
        publicPath  : '/images/portfolio'
      },

      /* Describe *one* collection: the portfolio cards              */
      models: [
        {
          name : 'portfolio',               // logical name
          path : 'portfolio',               // sub-folder of rootPath
          match: '*.md',                    // every .md file

          fields: [
            { name: 'title',       type: 'string' },
            { name: 'description', type: 'text'   },
            { name: 'url',         type: 'string' },
            { name: 'personas',    type: 'list',
              items: { type: 'string' } },

            /* enables the image-uploader in the Visual Editor */
            { name: 'image',       type: 'image' }
          ]
        }
      ]
    })
  ]
});

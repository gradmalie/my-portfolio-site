// stackbit.config.js   –  SDK 0.7-compatible
const { defineStackbitConfig } = require('@stackbit/types');
const { GitContentSource }    = require('@stackbit/cms-git');

module.exports = defineStackbitConfig({
  stackbitVersion: "~0.10.0",

  contentSources: [
    new GitContentSource({
      rootPath: 'src/content',          // where your markdown lives

      models: [
        {
          name:  'portfolio',
          path:  '.',                   // the .md files are directly inside /src/content/portfolio/
          match: '*.md',
          fields: [
            { name: 'title',       type: 'string' },
            { name: 'description', type: 'text'   },
            { name: 'url',         type: 'string' },
            { name: 'personas',    type: 'list',  items: { type: 'string' } },
            { name: 'image',       type: 'image', assetPath: 'public/images/portfolio' }
          ]
        }
      ]
    })
  ]
});

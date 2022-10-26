export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6358be289f346f4ffa7729e9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bq6q1k9v',
                  apiId: '0b82fdcf-954b-4bd5-9127-7bc8547a6eac'
                },
                {
                  buildHookId: '6358be294c7fdb4f0f4df6cb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eahny6cx',
                  apiId: 'b8939773-0ce6-4287-a8b7-8deccaa9dc7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ecln30/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eahny6cx.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

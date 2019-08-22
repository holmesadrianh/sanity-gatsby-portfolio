export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d5e80af7fb192e3437451b6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-64eg73r6',
                  apiId: '6ed4a8f7-b6b6-422a-b440-e405ad490247'
                },
                {
                  buildHookId: '5d5e80b02504f6f0a0e26961',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4ajdx4h7',
                  apiId: '0421f5a1-3630-4a49-8742-7c78e746fb63'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/holmesadrianh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4ajdx4h7.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

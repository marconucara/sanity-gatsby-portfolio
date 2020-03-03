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
                  buildHookId: '5e5e38741bc701dc95cd2ad9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vmop59cv',
                  apiId: 'ada8889e-60fb-42f2-bfb3-0b3d81f96050'
                },
                {
                  buildHookId: '5e5e387476d0afef3780d9e6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-o199wub8',
                  apiId: 'acfacc72-5c96-4447-a7cf-8223446dfd5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marconucara/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-o199wub8.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

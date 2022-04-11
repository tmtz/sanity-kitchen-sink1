export default {
  widgets: [
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
                  buildHookId: '6253eca53799d42faed32abc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1-studio-seh44nuo',
                  apiId: '4631174e-3742-401a-8656-4dca8032efe8'
                },
                {
                  buildHookId: '6253eca5b201ff36b143786a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1-web-na4cgxjk',
                  apiId: '13ce71d6-48d3-4335-87f2-ce241bde8a05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tmtz/sanity-kitchen-sink1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1-web-na4cgxjk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

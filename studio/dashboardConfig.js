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
                  buildHookId: '5fd512772f090e1ec938a5e7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5kvcgccp',
                  apiId: '44632aaa-a196-4652-91a4-7d049b915d97'
                },
                {
                  buildHookId: '5fd512778fce2144d188986e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6nu7rmix',
                  apiId: '078371a9-9719-4ddc-80cb-eba702224ea6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomaskvael/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6nu7rmix.netlify.app', category: 'apps'}
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

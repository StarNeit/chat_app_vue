
export default [
  {
    path: '/',
    redirect: '/page1'
  },
  {
    path: '/page1',
    meta: {
      title: 'Page1',
      ignoreAuth: true
    },
    component: resolve => require(['@views/page1'], resolve)
  },
  {
    path: '/page2',
    meta: {
      title: 'Page2',
      ignoreAuth: true
    },
    component: resolve => require(['@views/page2'], resolve)
  }
]

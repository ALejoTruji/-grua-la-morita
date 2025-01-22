
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1497, hash: 'e7afa1be3c7eb1d490c07597b86337955a4ccf10b8480f0edc717be135049701', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1787, hash: '34df1590b525ed94004038b30ab3b2d2ebb88ee01921d69ae3d12f537dd499ed', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6113, hash: 'd1b957cd6de5da77fdce0fd273fb773d1c1ef4e5cd781a597a748db096736b76', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YIXHCIBT.css': {size: 2153, hash: 'lMkD2PBsMBw', text: () => import('./assets-chunks/styles-YIXHCIBT_css.mjs').then(m => m.default)}
  },
};

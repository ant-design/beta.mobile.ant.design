module.exports = {
  secret: 'mXvdTx0LJjKDCb2Wqsq5jKpiMEvk2SL1ocVESHCfn5iHb4RWOB+34ihM2e+Rc6SZssxX1vQ041Q2OIg+j6uy7/mrTp/TvDOqORHzLGtLnSA=',
  fileList: [
    {
      template: [
        './index.html',
        './index-cn.html',
        './changelog.html',
        './changelog-cn.html',
        './changelog-cn-cn.html',
        './404.html',
      ],
      data: [
        {
          regex: /"\/index.css"/g,
          file: './index.css',
          template: '"{url}"',
        },
        {
          regex: /"\/index.js"/g,
          file: './index.js',
          template: '"{url}"',
        },
        {
          regex: /"\/common.js"/g,
          file: './common.js',
          template: '"{url}"',
        },
      ],
      options: {
        mode: 'public',
      },
    },
    {
      template: [
        './kitchen-sink/index.html',
        './kitchen-sink/404.html',
      ],
      data: [
        {
          regex: '/kitchen-sink/kitchen-sink.css',
          file: './kitchen-sink/kitchen-sink.css',
        },
        {
          regex: '/kitchen-sink/common.js',
          file: './kitchen-sink/common.js',
        },
        {
          regex: '/kitchen-sink/kitchen-sink.js',
          file: './kitchen-sink/kitchen-sink.js',
        },
      ],
      options: {
        mode: 'public',
      },
    },
  ],
};

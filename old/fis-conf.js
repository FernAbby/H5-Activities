fis.set('project.ignore',['node_modules/**', 'lib/**','output/**', '.git/**', 'fis-conf.js','angular.min.js','jquery-1.11.1.min.js','jquery.nicescroll.min.js'])
fis.set('project.md5Connector ', '.');
// var jadeConf = {
//     filters:{
//         jadesrc:require('jade-highlighter')
//     },
//     pretty:true
// };
// fis.config.set('setting.parser.jade',jadeConf);

// fis.config.set('modules.parser.jade', 'jade');
// //jade文件经过编译后输出为html文件
// fis.config.set('roadmap.ext.jade', 'html');
fis.match('**.jade',{
    rExt : 'html',
    parser:fis.plugin('jade',{
        pretty: true
    })
})
fis.match('**.scss', {
    useHash: true,
    rExt: '.css',
    parser: fis.plugin('node-sass', {
        // options...
    })
})
fis.match('js/*.js', {
    useHash: true,
    // optimizer: fis.plugin('uglify-js'),
    release:'/static/$0'
});
// fis.match('js/scroll.js', {
//     useHash: true,
//     optimizer: fis.plugin('uglify-js'),
//     release:'/static/$0'
// });
fis.match('**.less',{
    useHash: true,
    parser: fis.plugin('less', {
        //fis-parser-less option
    }),
    rExt: '.css'
});
fis.match('**.{less,css,scss}', {
    useHash: true,
    optimizer: fis.plugin('clean-css')
});
fis.match('*.html:css',{
    optimizer:fis.plugin('clean-css')
})
fis.match('**.png', {
    useHash: false
});
fis.match('/images/(*.{png,gif})', {
    //发布到/static/pic/xxx目录下
    release: '/images/$1$2'
});
fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

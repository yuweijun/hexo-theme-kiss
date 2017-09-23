hexo.extend.filter.register('after_post_render', function(data){
    // FIX FOR table render problem: https://github.com/hexojs/hexo/issues/1388
    data.content = data.content.replace(/><br>/g, '>')
    return data;
});

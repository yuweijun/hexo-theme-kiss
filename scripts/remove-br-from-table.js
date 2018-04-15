hexo.extend.filter.register('after_post_render', function(data){
    // FIX FOR table render problem: https://github.com/hexojs/hexo/issues/1388
    // FIX </td><br> </tr><br> </span><br>
    data.content = data.content.replace(/><br>/g, '>')
    return data;
});

/**
 * 将命令输出的结果加上classname: output，以区别bash中的命令
 * 删除</span>标签后面多余的<br>标签
 */
var fixEmptyLine = function(str) {
    str = str.replace(/<\/span><br>/g, '</span>')
             .replace(/class="line">&gt;\s?/g, 'class="line output">')
             .replace(/class="comment">#&gt;\s?/g, 'class="comment output">');
    return str;
};

hexo.extend.filter.register('after_post_render', function(data){
    console.log("after post render :", data.source);
    return data;
});

hexo.extend.filter.register('before_post_render', function(data){
    console.log("before post render :", data.source);
    data.title = data.title.toLowerCase();
    return data;
});

hexo.extend.filter.register('after_render:html', function(str, data){
    console.log("after render html :", data.path);
    return fixEmptyLine(str);
});

hexo.extend.filter.register('before_exit', function(){
    console.log("before exist");
});

hexo.extend.filter.register('before_generate', function(){
    console.log("before generate");
});

hexo.extend.filter.register('after_generate', function(){
    console.log("after generate");
});

hexo.extend.filter.register('after_exit', function(){
    console.log("after exist");
});


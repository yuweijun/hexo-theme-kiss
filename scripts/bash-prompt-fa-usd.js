hexo.extend.filter.register('after_post_render', function(data){
    // 将文章内容中bash提示符 "$>" 换成 fa-usd，并且提示符后面的bash命令高亮
    // 将命令输出的结果加上classname: output，以区别bash中的命令
    data.content = data.content.replace(/(\$&gt;\s*)([\w-]+)/g, '<i class="fa fa-usd"></i> <span class="built_in">$2</span>')
                               .replace(/(\$&gt;)(\s?)/g, '<i class="fa fa-usd"></i>$2')
                               .replace(/<div class="line">(&gt;\s?)(.*?<\/div>)/g, '<div class="line output">$2');
    return data;
});

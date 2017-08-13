hexo.extend.filter.register('after_post_render', function(data){
    data.content = data.content.replace(/(\$&gt;\s*)([\w-]+)/g, '<i class="fa fa-usd"></i> <span class="built_in">$2</span>')
                               .replace(/(\$&gt;)(\s?)/g, '<i class="fa fa-usd"></i>$2')
                               .replace(/<div class="line">(&gt;\s?)(.*?<\/div>)/g, '<div class="line output">$2');
    return data;
});

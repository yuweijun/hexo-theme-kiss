/**
 * 将文章内容中bash提示符 "$>" 换成 fa-usd，并且提示符后面的bash命令高亮
 */
var usd = function(str) {
    return str.replace(/(\$&gt;\s*)([\w-]+)/g, '<i class="fa fa-usd"></i> <span class="built_in">$2</span>')
              .replace(/(\$&gt;)(\s?)/g, '<i class="fa fa-usd"></i>$2');
};

hexo.extend.filter.register('after_render:html', usd);

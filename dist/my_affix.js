$(document).ready(function() {
    var pathname = window.location.pathname;
    // pc 的主页
    if (window.innerWidth > 768 && (pathname == '' || pathname == '/')) {
        $("body .header .header-inner").affix({
            // 设置高度 0 为从置顶开始就浮动
            offset: {
                top: 0
            }
        });

        $("body .main .main-inner .sidebar").affix({
            offset: {
                top: 0
            }
        });
    }
})



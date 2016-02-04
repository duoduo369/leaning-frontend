Controller
---
el: 是指这个controller的template的内容丢到哪个jquery选择的dom中

className: 会在el上面添加class

构造时controller要绑定refresh事件到render,
因为Model调用fetch的时候是异步的, 成功后会trigger一次refresh事件，
这时候在调用Model.all才能有数据

    Course.bind("refresh change", @render)

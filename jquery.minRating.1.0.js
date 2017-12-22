;
(function(method) {
	method(window, document, jQuery);
}(function(win, doc, $) {
	$.fn.minRating = function(option) {
		//参数列表
		var setting = {
			size: "30px", //星星大小
			count: 5, //星星个数
			color: "red" //星星颜色
		}
		$.extend(setting, option);

		/*给节点添加星星*/
		for(var j = 0; j < setting.count; j++) {
			this.append($("<a href='#'>&#xe80c;</a>").css({
				"font-size": setting.size,
				"color": setting.color
			}));
		}

		//频分标签,统一设置行高就好
		var grade = $(".minrating .grade");
		grade.css("line-height", setting.size);

		this.on("mousemove", function(e) {

			//当前元素的索引
			var cur = $(this).index();
			//当前元素的的所有子元素。
			var children = $(this).eq(cur).children("a");
			//频分标签， 这里要分别设置频分， 不然会相互影响。
			grade = $(this).eq(cur).next();
			//对齐评分标签
			grade.css("line-height", setting.size);
			//事件源对象
			var target = $(e.target);
			//当前是第几个星星
			var index = children.index(target);
			//鼠标的X轴
			var clientX = e.clientX;

			if(clientX < children.eq(index).offset().left + (parseInt(setting.size) / 2)) {
				for(var i = 0; i < setting.count; i++) {
					if(i < index) {
						children.eq(i).html("&#xe800;");
					}
					if(i > index) {
						children.eq(i).html("&#xe80c;");
					}
				}
				children.eq(index).html("&#xf123;");
				grade.html(index + 1 - 0.5);
			} else {
				for(var i = 0; i < setting.count; i++) {
					if(i < index) {
						children.eq(i).html("&#xe800;");
					}
					if(i > index) {
						children.eq(i).html("&#xe80c;");
					}
				}
				children.eq(index).html("&#xe800;");
				grade.html(index + 1);
			}

			if(clientX <= parseInt(children.eq(0).offset().left)) {
				//全部变空
				for(var i = 0; i < setting.count; i++) {
					children.eq(i).html("&#xe80c;");
					grade.html("0");
				}
			}

			if(clientX >= (parseInt(children.eq(setting.count - 1).offset().left) + parseInt(setting.size))) {
				//全部变变满
				for(var i = 0; i < setting.count; i++) {
					children.eq(i).html("&#xe800;");
					grade.html(setting.count);

				}
			}
		});
	}

}));
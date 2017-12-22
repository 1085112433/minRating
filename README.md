# 插件说明
这个只是上课的练习，没有实际意义。
##示例：
<!--标签格式-->
<div class="minrating">
	<div class="star-box"></div>
	<span class="grade"></span>
</div>

<script type="text/javascript" src="../js/jquery.js"></script>
<link rel="stylesheet" type="text/css" href="minRating/jquery.minRatng.1.0.min.css"/>
<script type="text/javascript" src="minRating/jquery.minRating.1.0.min.js"></script>
<script type="text/javascript">
	//调用：
	$(".star-box").minRating({
		size: "30px",
		count: 10,
		color: "red"
	});
</script>

/**
 * **
 * created by Ivan @2015-01-01
 * @param  {[type]} document [description]
 * @return {[type]}          [description]
 */
(function(document) {
	$("body").on('click', '#search', function(event) {
		event.preventDefault();
		if ($(".search").val()) {
			alertModal("你搜索的代码这世界上不存在！！！Are U Kidding Me?", null, null)

		} else {
			alertModal("请输入搜索代码!!!", null, null)

		}

	}).on('click', '#add_chapter', function(event) {
		event.preventDefault();
		var obj = {
			post_title: "每天读点好书"
		}
		$.post('/post_add', obj, function(data) {
			console.log(data);
		})
	}).on('mouseover', '.index_li', function(event) {
		event.preventDefault();
		var $this = $(this);
		$this.css("border", "solid 3px red");
		
		$(this).popover("show")

	}).on('mouseleave', '.index_li', function(event) {
		event.preventDefault();
		var $this = $(this);
		$this.css("border", 'initial');
		$(this).popover("hide")

	})
	$("[data-toggle='popover']").each(function(i) {
		var cfg = {
			trigger: 'hover',
			html: true
		}
		if (i % 6 == 5) {
			cfg["placement"] = "top";
		} else {
			cfg["placement"] = "top";
		}
		$(this).popover(cfg);
	});
	//angular operator
	angular.module("app", []).controller('PhoneListCtrl', function($scope) {
		$scope.phones = [{
			"name": "Nexus S",
			"img": "/assets/imgs/book.jpg",
			"href": "https://www.github.com/MYSHLIFE",
			"snippet": "Fast just got faster with Nexus S."
		}, {
			"name": "Motorola XOOM™ with Wi-Fi",
			"img": "/assets/imgs/book1.jpg",
			"href": "https://www.github.com/MYSHLIFE",

			"snippet": "The Next, Next Generation tablet."
		}, {
			"name": "Motorola XOOM™ with Wi-Fi",
			"img": "/assets/imgs/book2.jpg",
			"href": "https://www.github.com/MYSHLIFE",

			"snippet": "The Next, Next Generation tablet."
		}, {
			"name": "Nexus S",
			"img": "/assets/imgs/book3.jpg",
			"href": "https://www.github.com/MYSHLIFE",

			"snippet": "Fast just got faster with Nexus S."
		}, {
			"name": "Motorola XOOM™ with Wi-Fi",
			"img": "/assets/imgs/book4.jpg",
			"href": "https://www.github.com/MYSHLIFE",

			"snippet": "The Next, Next Generation tablet."
		}, {
			"name": "Motorola XOOM™ with Wi-Fi",
			"img": "/assets/imgs/book.jpg",
			"href": "https://www.github.com/MYSHLIFE",

			"snippet": "The Next, Next Generation tablet."
		}];
	});
	//下拉加载刷新
	var range = 50; //距下边界长度/单位px  
	var elemt = 500; //插入元素高度/单位px  
	var maxnum = 20; //设置加载最多次数  
	var num = 1;
	var totalheight = 0;
	var main = $("#content"); //主体元素  
	$(window).scroll(function() {
		var srollPos = $(window).scrollTop(); //滚动条距顶部距离(页面超出窗口的高度)  

		//console.log("滚动条到顶部的垂直高度: "+$(document).scrollTop());  
		//console.log("页面的文档高度 ："+$(document).height());  
		//console.log('浏览器的高度：'+$(window).height());  

		totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
		if (($(document).height() - range) <= totalheight && num != maxnum) {
			main.append("<div style='border:1px solid tomato;margin-top:20px;color:#ac" + (num % 20) + (num % 20) + ";height:" + elemt + "' >hello world" + srollPos + "---" + num + "</div>");
			num++;
		}
	});
	window.confirmModal = function(msg, cb_cancel, cb_ok) {
		$('#confirmModal').modal('show');
		$("#confirmModal").children().eq(1).css("top", "200px");
		$("#confirmModal").find(".modal_message").html(msg);
		$("#confirmModal").off('click');
		$("#confirmModal")
			.on('click', '#btn_ok', function(event) {
				event.preventDefault();
				console.log('message: ok');
				$('#confirmModal').modal('hide')
				if (cb_ok && typeof cb_ok == 'function') {
					cb_ok();
				};
			})
			.on('click', '#btn_cancel', function(event) {
				event.preventDefault();
				console.log('message: cancel');
				$('#confirmModal').modal('hide')
				if (cb_cancel && typeof cb_cancel == 'function') {
					cb_cancel();
				};
			});
	}

	window.alertModal = function(msg, cb_cancel, cb_ok) {
		$('#alertModal').modal('show');
		$("#alertModal").children().eq(1).css("top", "200px");
		$("#alertModal").find(".modal_message").html(msg);
		$("#alertModal").off('click');
		$("#alertModal")
			.on('click', '#btn_ok', function(event) {
				event.preventDefault();
				console.log('message: ok');
				$('#alertModal').modal('hide')
				if (cb_ok && typeof cb_ok == 'function') {
					cb_ok();
				};
			})
			.on('click', '#btn_cancel', function(event) {
				event.preventDefault();
				console.log('message: cancel');
				$('#alertModal').modal('hide')
				if (cb_cancel && typeof cb_cancel == 'function') {
					cb_cancel();
				};
			});
	}

}(document))
;$.fn.poster = function(size){
	var poster = $(this);
	var list   = poster.find('.poster-list');
	var item   = poster.find('.poster-item');
	var index  = 0;
	var length = item.length;
	
	var setting = {
		"width"  : '60%',
		"height" : 'auto'
	}
	$.extend(setting,getSetting());
	setSetting();
	
	item.slice(1).hide();
	
	
	if(size){
		var width = setting.width;
		$(window).on('resize',function(){
			var winW = $(window).width();
			var oldW = poster.css('width');
			var newW = 0;
			$.each(size,function(i,value){
				if(i>winW){
					newW = value;
					return false;
				}else{
					newW = width;
				}
			});
			if(newW != oldW){
				poster.css('width',newW);
			}
		});
	}
	
	
	poster.on('mousedown',function(e){
		var begginT = new Date();
		var begginX = e.clientX;
		poster.on('mouseup',function(e){
			poster.off('mouseup');
			var endT = new Date(),
				endX = e.clientX;
			var disX = endX - begginX;
			var disT = endT - begginT;
			if(Math.abs(disX)/disT>1){
				if(disX>0){
					index--;
				}else{
					index++;
				}
				moveFn();
			}
		});
	});
	
	poster.swipeLeft(function(){
		index--;
		moveFn();
	})
	poster.swipeRight(function(){
		index++;
		moveFn();
	})
	
	function getSetting(){
		var setting = poster.attr('data-setting');
		if(setting && setting!=''){
			return $.parseJSON(setting);
		}else{
			return {};
		}
	}
	
	function setSetting(){
		poster.css({
			width: setting.width,
			height: setting.height,
			position: 'relative'
		});
		poster.on('dragstart',function(){return false});
		list.css({
			width: '100%',
			height: '100%',
			position: 'relative',
			top: 0, left: 0
		});
		item.css({
			width: '100%',
			height: '100%',
			position: 'absolute'
		});
		item.find('a').css('display','block');
		item.find('img').css({
			width: '100%',
			height: setting.height,
			verticalAlign: 'top'
		});
		if(setting.height == 'auto'){
			var $img = item.find('img');
			$img.eq(0).on('load',function(){
				poster.css('height',$(this).height());
				$(window).on('resize',function(){
					poster.css('height',$img.eq(index).height());
				});
			})
			
		}	
	}
	
	function moveFn(){
		if(index<0){index = length-1};
		if(index==length){index=0};
		item.eq(index).show().siblings().hide();
	}
}

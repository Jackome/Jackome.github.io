$.fn.extend({
	magnify : function(config){
		var self = this;
		var config = config? config:{};
		this.setting = {
			'minWidth' : config.minWidth || 400,
//			'minHeight': config.minHeight|| 400,
			'divWidth' : config.divWidth || 100,
			'divHeight': config.divHeight|| 100,
			'maxWidth' : config.maxWidth || 400,
			'src'      : $(this).attr('srct') || $(this).attr('src'),
			'position' : config.position || 'right'
		};
		//this
		$(this).css({
			width: self.setting.minWidth,
			verticalAlign : 'top',
		})
		var oTop = $(self).offset().top, 
			oLeft= $(self).offset().left;
		$(this).css('position', 'static')
		//minDiv
		$(this).wrap('<div></div>');
		$(this).parent().css({
			'border':'5px solid black',
			'position': 'absolute',
			'width' : self.setting.minWidth,
//			'height': self.setting.minHeight,
			'top'   : oTop,
			'left'  : oLeft
		});
		//div
		var $div = $('<div></div>');
		$div.css({
			position: 'absolute',
			width: self.setting.divWidth,
			height: self.setting.divHeight,
			backgroundColor: 'rgba(0,255,255,0.5)',
			display: 'none'
		});
		$div.appendTo($(this).parent());
		//maxDiv
		var $maxDiv = $('<div></div>');
		var scaleX = self.setting.maxWidth/self.setting.divWidth;
		var mTop = 0, mLeft = 0;
		switch(self.setting.position){
			case 'right' : {
				mTop = $(this).parent().offset().top;
				mLeft = $(this).parent().offset().left + $(this).parent().outerWidth();
			}break;
			case 'left' : {
				mTop = $(this).parent().offset().top;
				mLeft = $(this).parent().offset().left - self.setting.maxWidth-10;
			}break;
			case 'top'  : {
				mTop = $(this).parent().offset().top - self.setting.divHeight*scaleX-10;
				mLeft = $(this).parent().offset().left;
			}break;
			case 'bottom'  : {
				mTop = $(this).parent().offset().top + $(this).parent().outerHeight();
				mLeft = $(this).parent().offset().left;
			}break;
		}
		$maxDiv.css({
			width : self.setting.maxWidth,
			height: self.setting.divHeight*scaleX,
			position: 'absolute',
			top: mTop,
			left: mLeft,
			border: '5px solid black',
			overflow: 'hidden',
			display: 'none'
		});
		$maxDiv.insertAfter($(this).parent());
		//img
		var $img = $('<img>');
		$img.attr('src',self.setting.src);
		$img.css({
			width: self.setting.minWidth*scaleX,
			position: 'absolute',
			top: 0,
			left: 0,
		});
		$img.appendTo($maxDiv);
		
		//事件
		$(this).parent().on('mouseenter',function(){
			$div.css('display','block');
			$maxDiv.css('display','block');
		});
		
		$(this).parent().on('mousemove',function(e){
			var x = e.pageX - $(self).offset().left - self.setting.divWidth/2;
			var y = e.pageY - $(self).offset().top - self.setting.divHeight/2;
			if(x<0){x=0};
			if(y<0){y=0};
			if(x>self.setting.minWidth-self.setting.divWidth){x=self.setting.minWidth-self.setting.divWidth};
			if(y>$(self).height()-self.setting.divHeight){y=$(self).height()-self.setting.divHeight};
			$div.css({
				top: y,
				left: x
			});
			$img.css({
				top: -y*scaleX,
				left: -x*scaleX
			});
		});
		
		$(this).parent().on('mouseleave',function(){
			$div.css('display','none');
			$maxDiv.css('display','none');
		});
	}
});
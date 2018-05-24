;(function($) {
    var calendar = function(options, $this){
        var defaults = {
            id: '',
            url: '/',
            currentDay: false,
            selectDay: '',
            firstDate: '',
            yearMonth: false,
            change: function() {},
            isDeadline: function(){},
            scroll : false
        };
        var option = $.extend(defaults, options);
        option.currentDay = option.currentDay ? option.currentDay : (new Date()).getFullYear() + '-' + ((new Date).getMonth() +1) + '-' + (new Date()).getDate();
        option.yearMonth = option.yearMonth ? option.yearMonth : (new Date()).getFullYear() + '-' + ((new Date).getMonth() +1);
        render_calendar(option,$this);
    };

    function render_calendar_title(option) {
      var isDisabled = '';
      if(option.firstDate.split('-')[0] == option.currentDay.split('-')[0] && option.firstDate.split('-')[1] == option.currentDay.split('-')[1]) {
        isDisabled = 'disabled';
      }
      return '<div class="calendar_title">' +
        '<div class="prev ' + isDisabled + '"></div>' +
        '<div class="date_title">' + option.yearMonth + '</div>' +
        '<div class="next"></div></div>';
    }

    function render_calendar_content(option) {
        return '<div class="calendar_content">' +
        render_calendar_week() + render_calendar_days(option) +
        '</div>';
    }

    function render_calendar_footer() {
        return '<div class="calendar_footer">您还未选座</div>';
    }

    function get_day_tr_Array(option) {
      var currentArray = option.currentDay.split('-');
      var currentDate = new Date(currentArray[0],currentArray[1] - 1,currentArray[2])
      currentDate.setDate(1);
      var blank_day = currentDate.getDay(); //当前月星期一是周几
      var curMonth = currentDate.getMonth();
      currentDate.setMonth(curMonth + 1);
      currentDate.setDate(0);

      var day_tr_Array = [];
      var totalCount = blank_day + currentDate.getDate();
      var day_tr_no = totalCount%7==0 ? parseInt(totalCount/7):parseInt(totalCount/7)+1;
      for(var i = 0; i < day_tr_no; i++) {
          day_tr_Array.push([]);
      }
      // 生成月前空白天
      for(var x = 0; x < blank_day; x++) {
        day_tr_Array[0].push('');
      }
      var index = 0;
      for(var j = 0; j < currentDate.getDate(); j++) {
          day_tr_Array[index].push(j+1);
          if(day_tr_Array[index].length == 7) {
            index++;
          }
      }
      // 生成月后空白天
      var lastArrayLen = day_tr_Array[day_tr_Array.length-1].length;
      for(var y = 0; y < 7 - lastArrayLen; y++) {
        day_tr_Array[day_tr_Array.length-1].push('');
      }

      return day_tr_Array;
    }

    function getPostData() {
      return [
        {
            "cardExchangeDays": 0,
            "count": 22,
            "day": "2015-12-30",
            "price": 358.00
        },
        {
            "cardExchangeDays": 0,
            "count": 14,
            "day": "2015-12-31",
            "price": 358.00
        },
        {
            "cardExchangeDays": 0,
            "count": 14,
            "day": "2015-12-2",
            "price": 358.00
        },
        {
            "cardExchangeDays": 0,
            "count": 14,
            "day": "2015-12-14",
            "price": 358.00
        },
        {
            "cardExchangeDays": 0,
            "count": 14,
            "day": "2015-12-29",
            "price": 358.00
        },
        {
            "cardExchangeDays": 0,
            "count": 14,
            "day": "2015-12-12",
            "price": 358.00
        }
    ];
    }

    function getDayData(data,day) {
      for(var i = 0; i < data.length; i++) {
        if(data[i].day.split("-")[2] == day) {
          var price = data[i].price;
          var count = data[i].count;
          var cardExchangeDays = data[i].cardExchangeDays;
        }
      }
      return {
        price : price || 0,
        count : count || 0,
        cardExchangeDays : cardExchangeDays || 0
      }
    }
    function render_calendar_days(option) {
      var dayHtml = '';
      var yearMonth = option.yearMonth ? option.yearMonth : (new Date()).getFullYear() + '-' + ((new Date()).getMonth() + 1);
      var data = getPostData();
      var day_tr_Array = get_day_tr_Array(option);

      if(data) {
        for (var i = 0; i < day_tr_Array.length; i++) {
          dayHtml += '<div class="day_tr">';
          for(var j = 0; j < day_tr_Array[i].length; j++) {

            var item = getDayData(data,day_tr_Array[i][j]);

              dayHtml += '<div class="day_td" data-week="' + (j+1) + '" data-date="' + yearMonth + '-' + day_tr_Array[i][j] + '">' +
                (item.count ? '<div class="dot"></div>' : '<div class="noDot"></div>') +
                '<div class="date">' + day_tr_Array[i][j] + '</div>' +
                (item.price == 0 ? '<div class="price none">' + item.price + '</div>' : '<div class="price">￥' + item.price + '</div>') +
                '</div>'
          }
          dayHtml += '</div>';
        }
      } else {
        dayHtml += '<div class="no_content">加载价格日历失败，<span class="refresh">点击重试！</span></div>';
      }

      return '<div class="days">' + dayHtml + '</div>';
    }

    function render_calendar_week() {
      return '<div class="week_tr">' +
        '<div class="week_td">日</div>' +
        '<div class="week_td">一</div>' +
        '<div class="week_td">二</div>' +
        '<div class="week_td">三</div>' +
        '<div class="week_td">四</div>' +
        '<div class="week_td">五</div>' +
        '<div class="week_td last">六</div></div>';
    }

    function toWeek(num) {
      switch(num)
        {
        case '1':
          return ' 周末';
          break;
        case '2':
          return ' 周一';
          break;
        case '3':
          return '周二';
          break;
        case '4':
          return '周三';
          break;
        case '5':
          return '周四';
          break;
        case '6':
          return '周五';
          break;
        case '7':
          return '周六';
          break;
        default:
          console.log('error');
        }
    }

    function render_calendar(option,$this) {

      $this.html(render_calendar_title(option) + render_calendar_content(option) + render_calendar_footer());
      if(option.scroll) {
        option.scroll.refresh();
      }
      $('.calendar .day_td').tap(function(e) {
        if($(this).find('.dot').hasClass('dot')) {
          if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $('.calendar_footer').html('您还未选座');
          } else {
            $('.day_td.selected').removeClass('selected');
            $(this).addClass('selected');
            $('.calendar_footer').html('您已选择<span> ' + $(this).attr('data-date').split('-')[2] + '日 ' + toWeek($(this).attr('data-week')) + '</span>');
          }
        }
      });
      $('.refresh').tap(function() {
        refresh(option,$this);
      })
      $('.next').tap(function() {
        if(!$(this).hasClass('active')){
          $(this).addClass('active');
          next(new Date(option.currentDay.split('-')[0],option.currentDay.split('-')[1]-1,1),$this,option);
        }
      });
      $('.prev').tap(function() {
        if(!$(this).hasClass('disabled')) {
          if(!$(this).hasClass('active')) {
            $(this).addClass('active');
            prev(new Date(option.currentDay.split('-')[0],option.currentDay.split('-')[1]-1,1),$this,option);
          }
        }
      });
    }
    var refresh = function(option,$this) {
      calendar(option,$this);
    }
    var next = function(currentDate, $this, option) {
        var currentMonth = currentDate.getMonth() + 1;
        currentDate.setMonth(currentMonth);
        var options = {
          id: option.id,
          url: option.url,
          currentDay: currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-' +currentDate.getDate(),
          selectDay: '',
          firstDate:option.firstDate,
          yearMonth: currentDate.getFullYear() + '-' + (currentDate.getMonth()+1),
          change: function() {},
          isDeadline: function(){}
        };
        calendar(options, $this);
    };

    var prev = function(currentDate, $this, option) {
        var currentMonth = currentDate.getMonth() - 1;
        currentDate.setMonth(currentMonth);
        var options = {
          id: option.id,
          url: option.url,
          currentDay: currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-' +currentDate.getDate(),
          selectDay: '',
          firstDate:option.firstDate,
          yearMonth: currentDate.getFullYear() + '-' + (currentDate.getMonth()+1),
          change: function() {},
          isDeadline: function(){}
        };
        calendar(options, $this);
        option.change();
    };

    $.fn.calendar = function(option){
        calendar(option,this);

    }
})(Zepto);

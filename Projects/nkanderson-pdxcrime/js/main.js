(function() {
  var settings = {
    data: data,
    currentYear: null,
    years: _.keys(data)
  }
  var chartSettings = {
    margin: {
      top: 50, right: 80, bottom: 20, left: 20
    },
    width: 1140,
    height: 4000,
    nbhoodLabelWidth: 250,
    barHeight: 30,
  }

  var controller = {
    init: function() {
      settings.currentYear = settings.years[0];
      yearsListView.init();
      chartView.init();
    },
    getDataMax: function() {
      var max = 0;
      _.forEach(settings.data, function(year) {
        if (_.max(_.values(year)) > max) {
          max = _.max(_.values(year));
        }
      });
      return max;
    },
    getYears: function() {
      return settings.years;
    },
    getCurrentYear: function() {
      return _.parseInt(settings.currentYear);
    },
    setCurrentYear: function(year) {
      var min = _.min(settings.years);
      var max = _.max(settings.years);
      if (year < min) {
        settings.currentYear = min;
      } else if (year > max) {
        settings.currentYear = max;
      } else {
        settings.currentYear = year;
      }
      yearsListView.render();
      chartView.render();
    },
    getDataByYear: function(year) {
      return _.values(settings.data[year]);
    }
  }
  controller.getDataMax();
  var yearsListView = {
    init: function() {
      this.yearsList = document.getElementById('year-list');
      this.yearSpanTemplate = _.template('<% _.forEach(yearsList, function(year) { %><span class="controls__year"><%- year %></span><% }); %>');
      this.yearSpans = this.yearSpanTemplate({'yearsList': controller.getYears()});

      this.yearsList.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName == 'SPAN') {
          var year = _.parseInt(e.target.innerHTML);
          controller.setCurrentYear(year);
          chartView.data = controller.getDataByYear(controller.getCurrentYear());
        }
      });

      this.render();
    },
    updateActiveYear: function(year) {
      var allSpans = document.querySelectorAll('.controls__year');
      _(allSpans).forEach(function(span) {
        if (_.isMatch(span.classList, 'active')) {
          span.classList.remove('active');
        }
        if (year === _.parseInt(span.innerHTML.replace(/ /g,''))) {
          span.classList.add('active');
        }
      });
    },
    render: function() {
      this.yearsList.innerHTML = this.yearSpans;
      this.updateActiveYear(controller.getCurrentYear());
    }
  }
  var chartView = {
    init: function() {
      var year = controller.getCurrentYear();
      this.data = controller.getDataByYear(year);
      this.width = chartSettings.width - chartSettings.margin.right - chartSettings.margin.left;
      this.height = chartSettings.height - chartSettings.margin.top - chartSettings.margin.bottom;

      this.x_ticks = [];
      var maxDomain = _.ceil(controller.getDataMax(), -3);
      for (var i = 0; i <= (maxDomain / 1000); i++) {
        this.x_ticks.push(i * 1000);
      }
      this.svg = d3.select('.chart-container').append('svg')
        .attr('width', this.width + chartSettings.margin.left + chartSettings.margin.right)
        .attr('height', this.height + chartSettings.margin.top + chartSettings.margin.bottom)
        .append('g');
        //.attr('transform', 'translate(' + chartSettings.margin.left + ', ' +  chartSettings.margin.top + ')');

      this.x = d3.scale.linear()
        .domain([0, d3.max(this.data)])
        .range([0, this.width - chartSettings.nbhoodLabelWidth]);

      this.y = d3.scale.linear()
        .domain([0, d3.max(this.data)])
        .range([this.height, 0]);

      this.yAxis = d3.svg.axis()
        .scale(this.x)
        .tickSize(10)
        .tickValues(controller.getYears())
        .orient("right");

      this.xAxis = d3.svg.axis()
        .scale(this.x)
        .tickValues(this.x_ticks)
        .orient('top');

      this.bar_x = this.svg.selectAll("g")
        .data(this.data)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(" + chartSettings.nbhoodLabelWidth + ", " + i * chartSettings.barHeight + ")"; })
        .classed('bars', true);

      this.rects = this.bar_x.append("rect")
        .data(this.data)
        .attr("width", function(d) { return chartView.x(d); })
        .attr("height", chartSettings.barHeight - 1);

      this.numbers = this.bar_x.append("text")
        .data(this.data)
        .attr("x", function(d) { return chartView.x(d) + 15; })
        .attr("y", chartSettings.barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });

      this.bar_x.append("text")
        .attr("x", -5)
        .attr("y", chartSettings.barHeight / 2)
        .attr("dy", ".35em")
        .attr("class", "nbhood-label")
        .text(function(d, i) { return _.keys(settings.data[controller.getCurrentYear()])[i]; });

      var xAxisSvg = d3.select('.x-axis').append('svg')
        .attr('width', this.width + chartSettings.margin.left + chartSettings.margin.right + 30)
        .attr('height', 30)
        .attr('transform', 'translate(' + chartSettings.margin.left + ', 0)');
      // console.log(xAxisSvg);
      xAxisSvg.append('g')
        .attr("class", "x axis")
        .attr("transform", "translate(" + chartSettings.nbhoodLabelWidth + ", 30)")
        .call(this.xAxis);

      // needs to prevent users from going below or above available years...
      var prev = document.querySelector('.chart-controls__prev');
      var next = document.querySelector('.chart-controls__next');

      prev.addEventListener("click", function() {
        var currentYear = controller.getCurrentYear();
        controller.setCurrentYear(currentYear - 1);
        chartView.data = controller.getDataByYear(controller.getCurrentYear());
        chartView.updateRects();
      });

      next.addEventListener("click", function() {
        var currentYear = controller.getCurrentYear();
        controller.setCurrentYear(currentYear + 1);
        chartView.data = controller.getDataByYear(controller.getCurrentYear());
        chartView.updateRects();
      });

      this.render();
    },
    updateRects: function() {
      chartView.data = controller.getDataByYear(controller.getCurrentYear());
      chartView.rects.data(chartView.data)
        .transition()
        .attr('width', function(d) { return chartView.x(d); });
      chartView.numbers.data(chartView.data)
        .transition()
        .attr("x", function(d) { return chartView.x(d) + 15; })
        .text(function(d) { return d; });
    },
    render: function() {
      this.updateRects();
    }
  }
  controller.init();

  var axisOffset = document.querySelector('.x-axis').offsetTop;
  var raf = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame;

  var lastScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (raf) {
    loop();
  }

  function loop() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;;
    if (lastScrollTop === scrollTop) {
      raf(loop);
      return;
    } else {
      lastScrollTop = scrollTop;
      // fire scroll function if scrolls vertically
      fixedAxis();
      raf(loop);
    }
  }

  function fixedAxis() {
    var axis = document.querySelector('.x-axis');
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if (_.indexOf(axis.classList, 'x-axis--fixed') >= 0 && top < axisOffset) {
      axis.classList.remove('x-axis--fixed');
    } else if (_.indexOf(axis.classList, 'x-axis--fixed') < 0 && top > axisOffset) {
      axis.classList.add('x-axis--fixed');
    }
  }
}());

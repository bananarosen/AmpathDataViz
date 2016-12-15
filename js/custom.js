$(document).ready(function() {
    $("#containerBar2").hide();
});

$("#entering").click(function(){
    $("#containerBar").hide();
    $("#containerBar2").show();
    $(this).removeClass("off").addClass("on");
    $("#exiting").removeClass("on").addClass("off");
 }); 

$("#exiting").click(function(){
    $("#containerBar2").hide();
    $("#containerBar").show();
    $(this).removeClass("off").addClass("on");
    $("#entering").removeClass("on").addClass("off");
});

document.addEventListener("DOMContentLoaded", function(event) {
    var gg1 = new JustGage({
      id: "gg1",
      value : 89,
      min: 0,
      max: 100,
      title: "% in Care",
      decimals: 0,
      gaugeWidthScale: 0.6,
      customSectors: [{
        color : "#E74C3C",
        lo : 0,
        hi : 80
      },{
        color : "#F1C40F",
        lo : 80,
        hi : 89
      },{
        color : "#2ECC71",
        lo : 89,
        hi : 100
      }],
      counter: true
    });

    $('#slider-range').click(function() {
      gg1.refresh(getRandomInt(40, 100));
    });


  });
      
  document.addEventListener("DOMContentLoaded", function(event) {
    var gg2 = new JustGage({
      id: "gg2",
      value : 78,
      min: 0,
      max: 100,
      title: "% on ATR",
      decimals: 0,
      gaugeWidthScale: 0.6,
      customSectors: [{
        color : "#E74C3C",
        lo : 0,
        hi : 80
      },{
        color : "#F1C40F",
        lo : 80,
        hi : 89
      },{
        color : "#2ECC71",
        lo : 89,
        hi : 100
      }],
      counter: true
    });

    $('#slider-range').click(function() {
      gg2.refresh(getRandomInt(30, 100));
    });


  });
 
document.addEventListener("DOMContentLoaded", function(event) {
    var gg3 = new JustGage({
      id: "gg3",
      value : 92,
      min: 0,
      max: 100,
      title: "% Virally Supressed",
      decimals: 0,
      gaugeWidthScale: 0.6,
      customSectors: [{
        color : "#E74C3C",
        lo : 0,
        hi : 80
      },{
        color : "#F1C40F",
        lo : 80,
        hi : 89
      },{
        color : "#2ECC71",
        lo : 89,
        hi : 100
      }],
      counter: true
    });

    $('#slider-range').click(function() {
      gg3.refresh(getRandomInt(70, 100));
    });

  }); 
      
$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: new Date('2013.01.01').getTime() / 1000,
      max: new Date('2017.01.01').getTime() / 1000,
      step: 86400,
      values: [ new Date('2016.06.01').getTime() / 1000, new Date('2017.01.01').getTime() / 1000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( (new Date(ui.values[ 0 ] *1000).toDateString() ) + " - " + (new Date(ui.values[ 1 ] *1000)).toDateString() );
      }
    });
    $( "#amount" ).val( (new Date($( "#slider-range" ).slider( "values", 0 )*1000).toDateString()) +
      " - " + (new Date($( "#slider-range" ).slider( "values", 1 )*1000)).toDateString());
  });  
      

      
$(function () {
    

    
    Highcharts.chart('container', {
       
       //Allowed for data labels to overlap, since some titles are too long

       plotOptions: {
            series: {
                dataLabels: {
                crop: false,
                allowOverlap: true,
                overflow:"none"
                }
            }
        },
        
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            data: [{
                name: 'Patients In Care: 77.6%',
                value: 1246,
                color: '#4d4dff'
            }, {
                name: 'Defaulters: 11.5%',
                value: 185,
                color: '#6699ff'
            }, {
                name: 'Transferred-In: 4.3%',
                value: 69,
                color: '#66c2ff'
            }, {
                name: 'Lost to Follow Up: 3.2%',
                value: 52,
                color: '#80e5ff'
            }, {
                name: 'Self-Disengaged: 2.4%',
                value: 2.4,
                color: '#9966ff'
            }, {
                name: 'Died: 1%',
                value: 16,
                color: '#d24dff'
            }, {
                name: 'HIV Negative: 1%',
                value: 16,
                color: '#4d4dff'
            }]
        }],
        title: {
            text: 'Patient Distribution Breakdown'
        }
    });
    
        $('#em').on('input', function () {
        chart.container.style.fontSize = this.value + 'em';

        // Update layout based on new font and line sizes
        chart.isDirtyLegend = true;
        chart.redraw(false);
    });
});

$(function () {
    Highcharts.chart('containerBar', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Patients Exiting Care'
        },
        xAxis: {
            categories: ['July 2016', 'August 2016', 'September 2016', 'October 2016', 'November 2016', 'December 2016']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Patients'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: 0,
            verticalAlign: 'middle',
            y: 30,
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false,
            width: 180
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'Defaulters',
            data: [5, 3, 4, 7, 2, 3]
        }, {
            name: 'Transferred',
            data: [2, 2, 3, 2, 1, 2]
        }, {
            name: 'Lost to Follow Up',
            data: [3, 4, 4, 2, 5, 0]
        }, {
            name: 'Self-Disengaged',
            data: [3, 1, 1, 2, 0, 0]
        }, {
            name: 'Died',
            data: [0, 1, 0, 2, 0, 1]
        }, {
            name: 'HIV Negative',
            data: [1, 1, 2, 0, 0, 1]
        }]
    });
});

$(function () {
    Highcharts.chart('containerBar2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Patients Entering Care'
        },
        xAxis: {
            categories: ['July 2016', 'August 2016', 'September 2016', 'October 2016', 'November 2016', 'December 2016']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Patients'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: 0,
            verticalAlign: 'middle',
            y: 30,
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false,
            width: 180
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'New Patient',
            data: [5, 3, 4, 7, 2, 3]
        }, {
            name: 'Transferred In',
            data: [2, 2, 3, 2, 1, 2]
        }, {
            name: 'Found',
            data: [3, 4, 4, 2, 5, 0]
        }]
    });
});




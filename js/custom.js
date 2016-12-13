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
      
/*$(function() {
  Highcharts.chart('container2', {
    title: {
      text: 'Monthly Patient Retention',
      x: -20 //center
    },
    subtitle: {
      text: 'Year 2016',
      x: -20
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Number of Patients'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: ''
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Defaulters',
      data: [185, 188, 188, 182, 180, 179, 179, 177, 180, 183, 179, 180]
    }, {
      name: 'Transferred',
      data: [69, 40, 50, 56, 30, 15, 22, 33, 40, 32, 33, 40]
    }, {
      name: 'Lost to Follow Up',
      data: [52, 49, 40, 39, 52, 51, 49, 40, 39, 40, 41, 42]
    }, {
      name: 'Self Disengaged',
      data: [39, 42, 33, 44, 45, 20, 33, 40, 44, 32, 37, 36]
    }, {
      name: 'Died',
      data: [16, 22, 20, 18, 19, 20, 15, 17, 16, 18, 19, 20]
    }, {
      name: 'HIV Negative',
      data: [16, 10, 12, 22, 20, 18, 19, 17, 12, 14, 15, 16]
    }]
  });
}); */
      
$(function() {
  Highcharts.chart('container3', {
    series: [{
      type: "treemap",
      layoutAlgorithm: 'stripes',
      alternateStartingDirection: true,
      levels: [{
        level: 1,
        layoutAlgorithm: 'sliceAndDice',
        dataLabels: {
          enabled: true,
          align: 'center',
          verticalAlign: 'top',
          style: {
            fontSize: '8px',
            fontWeight: 'bold'
          }
        }
      }],
      data: [{
        id: 'A',
        name: 'Defaulters (185)',
        color: "#EC2500"
      }, {
      	id: 'C' ,
        name: 'Lost to Follow up (52)' ,
        color: '#6F3E9C'
      }, {
        id: 'B',
        name: 'In-Care (1246)',
        color: "#ECE100",
      }, {
        id: 'O',
        name: 'Transfer (69)',
        color: '#EC9800'
      }, {
        parent: 'A',
        value: 11.5 
      }, {
        parent: 'B',
        value: 77.6
      }, {
        parent: 'O',
        value: 4.3
      }, {
        name: 'Died (16)',
        value: 1,
        color: '#9EDE00'
      }, { 
      	parent: 'C' ,
        value: 3.2
      }, {
      	name: 'HIV Negative (16)' ,
        value: 1,
        color: '#05A6F0'
      }, {
      	name: 'Self Disengaged (39)' ,
        value: 2.4 ,
        color: '#666666',
      }]
    }],
    title: {
      text: 'Patient Retention'
    }
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




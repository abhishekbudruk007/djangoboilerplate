/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - chart combinations
 *
 *  Google Visualization combo chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleComboChart = function() {


    //
    // Setup module components
    //

    // Combo chart
    var _googleComboChart = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawCombo();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawCombo);

                // Resize on window resize
                var resizeCombo;
                $(window).on('resize', function() {
                    clearTimeout(resizeCombo);
                    resizeCombo = setTimeout(function () {
                        drawCombo();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawCombo() {

            // Define charts element
            var combo_chart_element = document.getElementById('google-combo');

            // Data
            var data = google.visualization.arrayToDataTable([
                ['Month', 'Whitelisted', 'Blacklisted', 'Visitor', 'Unknown'],
                ['2014/15',  165,      938,         522,             998],
                ['2015/16',  135,      1120,        599,             1268],
                ['2016/17',  157,      1167,        587,             807],
                ['2017/18',  139,      1110,        615,             968],
                ['2018/19',  136,      691,         629,             1026]
            ]);


            // Options
            var options_combo = {
                fontName: 'Roboto',
                height: 400,
                fontSize: 12,
                chartArea: {
                    left: '5%',
                    width: '94%',
                    height: 350
                },
                seriesType: "bars",
                series: {
                    5: {
                        type: "line",
                        pointSize: 5
                    }
                },
                tooltip: {
                    textStyle: {
                        fontName: 'Roboto',
                        fontSize: 13
                    }
                },
                vAxis: {
                    gridlines:{
                        color: '#e5e5e5',
                        count: 10
                    },
                    minValue: 0
                },
                legend: {
                    position: 'top',
                    alignment: 'center',
                    textStyle: {
                        fontSize: 12
                    }
                }
            };

            // Draw chart
            var combo = new google.visualization.ComboChart(combo_chart_element);
            combo.draw(data, options_combo);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleComboChart();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleComboChart.init();

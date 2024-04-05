// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart1'));
// 指定图表的配置项和数据
let option1 = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#3D91F7', '#61BE67'],
    tooltip: {},
    legend: {
        show: true,
        icon: "circle",
        bottom: 30,
        center: 0,
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 21,
        orient: "horizontal",
        data: ['a', 'b'],
        textStyle: {
            fontSize: '70%',
            color: '#8C8C8C'
        },
    },

    radar: {
        // shape: 'circle',
        radius: '80%',
        triggerEvent: true,
        name: {
            textStyle: {
                color: '#333',
                fontSize: '20',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        nameGap: '2',
        indicator: [
            { name: 'JavaScript', max: 10 },
            { name: 'HTML', max: 10 },
            { name: 'Vue3', max: 10 },
            { name: 'Vite', max: 10 },
            { name: 'Layui', max: 10 },
            { name: 'Vant4', max: 10 },
            { name: 'Uniapp', max: 10 },
            { name: '小程序', max: 10 },
            { name: 'PC项目', max: 10 },
            { name: '3D技术', max: 10 },
            { name: 'Echarts', max: 10 },
            { name: 'Ajax', max: 10 },
            { name: 'CSS', max: 10 }

        ],
        splitArea: {
            areaStyle: {
                color: [
                    'rgba(0, 255, 255, 0.1)', 'rgba(0, 255, 255, 0.2)',
                    'rgba(0, 255, 255, 0.3)', 'rgba(0, 255, 255, 0.4)',
                    'rgba(0, 255, 255, 0.5)', 'rgba(0, 255, 255, 0.6)'
                ].reverse()
            }
        },
        // axisLabel:{//展示刻度
        //     show: true
        // },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        splitLine: {
            lineStyle: {
                width: 2,
                color: 'transparent'
            }
        },

    },

    series: [{
        name: '前端技术',
        type: 'radar',
        itemStyle: {
            borderColor: 'rgba(66, 242, 185, 1)',
            color: '#fff',
            borderWidth: 0.2
        },
        areaStyle: {
            normal: {
                color: 'rgba(0, 255, 255, 0.0)'
            }
        },
        symbolSize: 10,
        lineStyle: {
            normal: {
                color: 'rgba(252,211,3, 1)',
                width: 1
            }
        },
        data: [{
            value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            name: '前端技术',
        }
        ]
    }]
}
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option1);

//后端技术栈
// 基于准备好的dom，初始化echarts实例
var myChart2 = echarts.init(document.getElementById('chart2'));
// 指定图表的配置项和数据
// 分割线颜色
let splitColor = '#728AE4';
let option2 = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
        show: false // 弹层数据去掉
    },
    legend: {
        show: false,
    },
    radar: {
        center: ['50%', '50%'], // 外圆的位置
        radius: '55%',
        name: {
            textStyle: {
                color: '#333',
                fontSize: 18,
            }
        },
        // TODO:
        indicator: [
            {
                name: 'Node.js',
                max: 100
            },
            {
                name: '接口路由',
                max: 100
            },
            {
                name: '各种API',
                max: 100
            },
            {
                name: '模块使用',
                max: 100
            },
            {
                name: '鉴权/加密',
                max: 100
            },
            {
                name: '文件操作',
                max: 100
            }
        ],
        splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
                // 分隔区域的样式设置。
                color: ['#131C34'] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        axisLine: {
            // 指向外圈文本的分隔线样式
            lineStyle: {
                color: splitColor
            }
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: splitColor, // 分隔线颜色
                width: 1 // 分隔线线宽
            }
        }
    },
    series: [
        {
            type: 'radar',
            symbolSize: 0,
            itemStyle: {
                borderColor: 'rgba(66, 242, 185, 1)',
                color: '#fff',
                borderWidth: 0.2
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: '#2E71F9',
                }
            },
            data: [
                {
                    // TODO:
                    value: [100, 100, 100, 100, 100, 100],
                    name: '男',
                    areaStyle: {
                        normal: {
                            color: '#1A2F5D'
                        }
                    },
                },

            ]
        }
    ]
}

// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2);

//其他技术
var myChart3 = echarts.init(document.getElementById('chart3'));
let option3 = {
    backgroundColor: 'rgba(0,0,0,0)',
    "normal": {
        "top": 0,
        "left": 0,
        "width": 330,
        "height": 300,
        "zIndex": 6,
        "backgroundColor": ""
    },
    "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
    "title": {
        "show": true,
        "left": "40%",
        "top": "1%",
        "textStyle": {
            "fontSize": 18,
            "color": "#fff",
            "fontStyle": "normal",
            "fontWeight": "normal"
        }
    },
    "tooltip": {
        "show": true,
        "trigger": "item"
    },
    "legend": {
        "show": true,
        "icon": "circle",
        "left": "35%",
        "top": "90%",
        "orient": "horizontal",
        "textStyle": {
            "fontSize": 14,
            "color": "#fff"
        }
    },
    "radar": {
        "center": ["50%", "50%"],
        "radius": "70%",
        "startAngle": 90,
        "splitNumber": 4,
        "shape": "circle",
        "splitArea": {
            "areaStyle": {
                "color": ["transparent"]
            }
        },
        "axisLabel": {
            "show": false,
            "fontSize": 18,
            "color": "#fff",
            "fontStyle": "normal",
            "fontWeight": "normal"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "black"//
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "white"//
            }
        },
        "indicator": [{
            "name": "MySQL",
            "max": 100
        }, {
            "name": "MongoDB",
            "max": 100
        }, {
            "name": "Git协同开发",
            "max": 100
        }, {
            "name": "项目上线",
            "max": 100
        }, {
            "name": "ChatGPT",
            "max": 100
        }, {
            "name": "PS/PR/3dMax",
            "max": 100
        }, {
            "name": "VPN",
            "max": 100
        },
        {
            "name": "Python",
            "max": 100
        }]
    },
    "series": [{
        "name": "数据库及其他技术",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "areaStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 0.5)"
            }
        },
        itemStyle: {
            color: 'rgba(245, 166, 35, 1)',
            borderColor: 'rgba(19, 173, 255, 1)',
            borderWidth: 10,
        },
        "lineStyle": {
            "normal": {
                "type": "dashed",

                "color": "rgba(19, 173, 255, 1)",
                "width": 2
            }
        },
        "data": [
            [100, 100, 100, 100, 100, 100, 100, 100]
        ]
    }]
};
myChart3.setOption(option3);
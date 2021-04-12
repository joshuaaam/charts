<template>
  <div class="hello">
    <div
      class="map-container"
      ref="myEchart1"
      :style="{ width: '900px', height: '900px' }"
    ></div>
    <!-- <div id="myChar1t" :style="{ width: '300px', height: '300px' }"></div> -->
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var myData = [
        { name: "海门", value: [121.15, 31.89, 90] },
        { name: "鄂尔多斯", value: [109.781327, 39.608266, 120] },
        { name: "招远", value: [120.38, 37.35, 142] },
        { name: "舟山", value: [122.207216, 29.985295, 123] },
        { name: "金昌", value: [102.188043, 38.520089, 12] },
        { name: "泉州", value: [118.58, 24.93, 11] },
        { name: "莱西", value: [120.53, 36.86, 2352] },
        { name: "日照", value: [119.46, 35.42, 124] },
        { name: "胶南", value: [119.97, 35.88, 1214] },
        { name: "南通", value: [121.05, 32.08, 43] },
        { name: "拉萨", value: [91.11, 29.97, 4356] },

        { name: "舟山", value: [122.207216, 29.985295, 123] },
        { name: "金昌", value: [112.188043, 38.520089, 12] },
        { name: "泉州", value: [118.58, 24.93, 11] },
        { name: "莱西", value: [110.53, 36.86, 2352] },
        { name: "日照", value: [110.46, 35.42, 124] },
        { name: "胶南", value: [110.97, 35.88, 1214] },
        { name: "南通", value: [120.05, 32.08, 43] },
        { name: "拉萨", value: [120.11, 29.97, 4356] },

        { name: "舟山", value: [122.207216, 29.985295, 123] },
        { name: "金昌", value: [112.188043, 38.520089, 12] },
        { name: "泉州", value: [118.58, 26.93, 11] },
        { name: "莱西", value: [110.53, 38.86, 2352] },
        { name: "日照", value: [110.46, 33.42, 124] },
        { name: "胶南", value: [110.97, 36.88, 1214] },
        { name: "南通", value: [120.05, 22.08, 43] },
        { name: "拉萨", value: [120.11, 29.97, 4356] },

        // '云浮':[112.02,22.93],
        // '梅州':[116.1,24.55],
        // '文登':[122.05,37.2],
        // '上海':[121.48,31.22],
        // '攀枝花':[101.718637,26.582347],
        // '威海':[122.1,37.5],
        // '承德':[117.93,40.97],
        // '厦门':[118.1,24.46],
        // '汕尾':[115.375279,22.786211],
        // '潮州':[116.63,23.68],
        // '丹东':[124.37,40.13],
        // '太仓':[121.1,31.45],
        // '曲靖':[103.79,25.51],
      ];
      var option = {
        // xAxis:{
        //   offset:'10'
        // },
        visualMap: {
          type: "continuous", // 连续型
          show: false,
          min: 0, // 值域最小值，必须参数
          max: 100, // 值域最大值，必须参数
          calculable: false, // 是否启用值域漫游
          itemWidth: 10,
          inRange: {
            // color: "#FFF68F",
            color: "#EE2C2C",
            symbolSize: [1, 15],
            // color: ["#50a3ba", "#eac736", "#d94e5d"],
            // 指定数值从低到高时的颜色变化
          },
          textStyle: {
            color: "white", // 值域控件的文本颜色
          },
        },
        geo: {
          map: "china",
          //    aspectScale: 0.75, //长宽比
          //   zoom:1.1,
          // shadowOffsetY: 5,
          itemStyle: {
            // 定义样式
            normal: {
              // 普通状态下的样式
              // opacity:'0',
              areaColor: "LightSlateGray",
              borderColor: "#111",
              shadowOffsetX: 5,
              shadowOffsetY: 5,
              shadowColor: "rgba(135,206,255,.6)",
              // shadowBlur: 10,
            },

            emphasis: {
              // 高亮状态下的样式
              areaColor: "LightSlateGray",
            },
          },
          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                // 隐藏地图
                normal: {
                  opacity: 0, // 为 0 时不绘制该图形
                },
                emphasis: {},
              },
              label: {
                show: false, // 隐藏文字
              },
            },
          ],
        },
        series: [
          {
            name: "销量", // series名称
            type: "scatter", // series图表类型
            coordinateSystem: "geo", // series坐标系类型
            data: myData, // series数据内容
            itemStyle: {
              // 隐藏地图
              normal: {
                //   opacity: 0, // 为 0 时不绘制该图形
                shadowOffsetX: 0,
                shadowOffsetY: 5,
                shadowBlur: 10,
              },
            },
          },

          {
            type: "map",
            map: "china",
            roam: false,
            emphasis: {
              label: {
                // show: false,
              },
              itemStyle: {
                // areaColor: "LightSlateGray",
                areaColor: "rgba(39,64,139,.8)",

                // shadowBlur: 15,
                // shadowOffsetY: 10,
              },
            },

            itemStyle: {
              normal: {
                areaColor: "rgba(39,64,139,.8)",
                borderColor: "#00BFFF",
                shadowColor: "#01012a",
                opacity: "1",
                borderWidth: "1.2",
              },
            },

            select: {
              itemStyle: {
                // areaColor: "LightSlateGray",
                areaColor: "rgba(39,64,139,.8)",
              },
            },

            regions: [
              {
                name: "南海诸岛",
                itemStyle: {
                  // 隐藏地图
                  normal: {
                    opacity: 0, // 为 0 时不绘制该图形
                  },
                  emphasis: {},
                },
                label: {
                  show: false, // 隐藏文字
                },
              },
            ],
          },
        ],

        // backgroundColor: "#708090", // 图表背景色
      };
      let myEchart = this.$echarts.init(this.$refs.myEchart1);
      myEchart.setOption(option);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.map-container {
  // transform: rotateY(0deg) rotateX(10deg)
}
</style>

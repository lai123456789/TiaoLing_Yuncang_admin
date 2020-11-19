<template>
  <div class="dashboard-container">
    <el-container>
      <el-container>
        <div class="two row-bg">
          <div><i class="el-icon-time" />待办事项提醒</div>
          <el-row type="flex"  justify="space-around">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div style="display: flex;align-items: center">海外仓待拣货订单：<h3>808</h3></div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <div style="display: flex;align-items: center">中国仓待接收订单：<h3>808</h3></div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <div style="display: flex;align-items: center">虚拟仓待处理订单：<h3>808</h3></div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <div style="display: flex;align-items: center">退件仓待处理订单：<h3>808</h3></div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="two row-bg">
          <div><i class="el-icon-time" />营销统计</div>
          <el-row type="flex" justify="space-between">
            <el-col :span="8">
              <div class="grid-content bg-purple yingxiao">
                <div class="yingxiao1">
                  <img src="../../assets/images/mainBottom.png" alt="">
                </div>
                <div class="yingxiao2">
                  <div>8970</div>
                  <div>今日销售额</div>
                </div>
                <div class="yingxiao3">
                  <div>昨日：8790</div>
                  <div>前日：8790</div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple yingxiao">
                <div class="yingxiao1">
                  <img src="../../assets/images/mainBottom.png" alt="">
                </div>
                <div class="yingxiao2">
                  <div>8970</div>
                  <div>今日销售额</div>
                </div>
                <div class="yingxiao3">
                  <div>昨日：8790</div>
                  <div>前日：8790</div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple yingxiao">
                <div class="yingxiao1">
                  <img src="../../assets/images/mainBottom.png" alt="">
                </div>
                <div class="yingxiao2">
                  <div>8970</div>
                  <div>今日销售额</div>
                </div>
                <div class="yingxiao3">
                  <div>昨日：8790</div>
                  <div>前日：8790</div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple yingxiao">
                <div class="yingxiao1">
                  <img src="../../assets/images/mainBottom.png" alt="">
                </div>
                <div class="yingxiao2">
                  <div>8970</div>
                  <div>今日销售额</div>
                </div>
                <div class="yingxiao3">
                  <div>昨日：8790</div>
                  <div>前日：8790</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="two row-bg">
          <el-row type="flex" justify="space-between">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div id="myChartLeft" :style="{width: '400px', height: '300px'}"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div id="myChart" :style="{width: '400px', height: '300px'}"></div>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div id="myChartBottomLeft" :style="{width: '400px', height: '300px'}"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div id="myChartBottomRight" :style="{width: '400px', height: '300px'}"></div>
              </div>
            </el-col>
          </el-row>
          <h3>订单销售榜</h3>
          <el-card style="margin-right: 20px">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="headPic"
                label="用户名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sku"
                label="用户编码"
                width="180">
              </el-table-column>
              <el-table-column
                prop="num"
                label="订单数">
              </el-table-column>
              <el-table-column
                prop="price"
                label="订单总额">
              </el-table-column>
            </el-table>
          </el-card>
        </div>
        <el-footer>

        </el-footer>
      </el-container>

    </el-container>

    <div class="dashboard-text">
    </div>
  </div>
</template>

<script>
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/bar');
    require("echarts/lib/chart/line");
    require("echarts/lib/chart/pie");
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
import { mapGetters } from 'vuex'
    import { ceshi } from '../../api/LLKapi'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
        this.drawLine();
        this.getList()
    },
    methods: {
      getList(){
          let par = {
              id:1
          }
          ceshi(par).then(response => {  //调用接口
            console.log(response)
          }).catch(error => {
             console.log(error)
          })
      },
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChartLeft = echarts.init(document.getElementById('myChartLeft'))
            let myChart = echarts.init(document.getElementById('myChart'))
            let myChartBottomLeft = echarts.init(document.getElementById('myChartBottomLeft'))
            let myChartBottomRight = echarts.init(document.getElementById('myChartBottomRight'))
            // 绘制图表
            myChartLeft.setOption({
                title: { text: '近期订单数' },
                tooltip: {},
                xAxis: {
                    type: 'category',
                  data: ['11/04', '11/05', '11/06', '11/07', '11/08', '11/09', '11/10'],
                  splitLine:{
                    show:true //分割线
                  },
                  axisLine:{
                    show:true, //线段加深
                    lineStyle:{
                      color:'#1DCCC3'
                    }
                  }
                },
                yAxis: [{
                  axisLabel:{
                    show:true //是否显示刻度
                  },
                  axisLine:{
                    show:true //线段加深
                  },
                  axisTick:{
                    show:true //是否显示刻度小标线
                  },
                  splitLine:{
                    show:true //分割线
                  }
                }],
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                  color:'orange'
                }]
            });
            myChart.setOption({
              title: { text: '平台订单数对比' },
              color: ["#FF6F52", "#1DCCC3"],
              legend: {
                left:'150'
              },
              xAxis:  {
                splitLine:{
                  show:true //分割线
                },
                type: 'category',
                axisTick: {show: false},
                data: ['11/04', '11/05', '11/06', '11/07', '11/08', '11/09', '11/10'],
              },
              yAxis: {
                splitLine:{
                  show:true //分割线
                }
              },
              series: [ {
                name: 'Lazada',
                type: 'bar',
                barGap: 0,
                data: [120, 200, 150, 80, 70, 110, 130]
              },
                {
                  name: 'shoppee',
                  type: 'bar',
                  data: [120, 200, 150, 80, 70, 110, 130]
                }]
            });

            myChartBottomLeft.setOption({
                title: { text: '近期销售额' },
                tooltip: {},
                xAxis: {
                    type: 'category',
                  data: ['11/04', '11/05', '11/06', '11/07', '11/08', '11/09', '11/10'],
                  color:'#333',
                  splitLine:{
                    show:true //分割线
                  },
                  axisLine:{
                    show:true, //线段加深
                    lineStyle:{
                      color:'#1DCCC3'
                    }
                  }
                },
                yAxis: {
                    type: 'value',
                  splitLine:{
                    show:true //分割线
                  }
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                  color:'orange'
                }]
            });
            myChartBottomRight.setOption({
              title: { text: '平台销售额对比' },
              color: ["#FF6F52", "#1DCCC3"],
              legend: {
                left:'150'
              },
              xAxis:  {
                splitLine:{
                  show:true //分割线
                },
                type: 'category',
                axisTick: {show: false},
                data: ['11/04', '11/05', '11/06', '11/07', '11/08', '11/09', '11/10'],
              },
              yAxis: {
                splitLine:{
                  show:true //分割线
                }
              },
              series: [ {
                name: 'Lazada',
                type: 'bar',
                barGap: 0,
                data: [120, 200, 150, 80, 70, 110, 130]
              },
                {
                  name: 'shoppee',
                  type: 'bar',
                  data: [120, 200, 150, 80, 70, 110, 130]
                }]
            });



        }
    }
}
</script>

<style lang="scss" scoped>
  .el-footer {
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px;*/
  }

  .el-aside {
    background-color: #F7F8FA;
    color: #333;
    text-align: center;
    .bg-right-1{
      width: 100%;
      background: #F7F8FA;
      padding: 20px 20px 25px 0;
      .bg-index{
        border-radius: 10px;
        height: 400px;
        background: #ffffff;
        text-align: left;
        padding: 20px;
        .bg-title{
          span{
            font-size: 20px;
          }
        }
      }

    }
    .bg-right-2{
      width: 100%;
      background: #F7F8FA;
      padding: 0 20px 30px 0;
      .bg-index{
        text-align: left;
        padding: 20px;
        height:330px;
        border-radius: 10px;
        background: #ffffff;
        .bg-title{
          span{
            font-size: 20px;
          }
        }
      }

    }
  }

  body > .el-container {
    margin-bottom: 40px;
    }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    /*background: #99a9bf;*/
  }
  .bg-purple {
    /*background: #d3dce6;*/
  }
  .bg-purple-light {
    /*background: #e5e9f2;*/
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    .textTime{
      color: #999999;
      font-size: 14px;
    }
    .textDiv{
    display: flex;
      justify-content: space-around;
      align-items: center;
      div:nth-child(1){
        font-size: 28px;
      }
  }
  }
  .yingxiao{
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    .yingxiao1{
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .yingxiao2{
      margin-left: -30px;
      div:nth-child(1){
        font-size: 22px;
        font-weight: bold;
      }
      div:nth-child(2){
        color: #999999;
        font-size: 14px;
      }
    }
    .yingxiao3{
      div{
        font-size: 14px;
        color: #666666;
      }
    }
  }
  .row-bg {
    padding: 10px 0;
    margin: 20px 20px 0px 20px;
    background-color: white;
    border-radius: 10px;
    flex-flow: row wrap;
  }
  .two{
    padding-left: 20px;
    div{
      line-height: 30px;
    }
    .el-row{
      flex-flow: row wrap;
      .el-col{
        .grid-content{
          text-align: center;
        }
      }
    }
  }
</style>

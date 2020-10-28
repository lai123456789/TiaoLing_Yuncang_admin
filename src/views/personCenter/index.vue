<template>
  <div class="user-container">
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick" :tab-position="tabPosition"
      >
        <el-tab-pane  name="first">
          <span slot="label" ><i class="el-icon-user"></i> 个人资料</span>
          <div class="row">个人资料</div>
          <el-form ref="regForm" label-width="200px" :model="form" :rules="rules">
            <!-- 上传头像  -->
            <el-form-item label="更换头像：" prop="Tavatar">
              <el-upload
                v-model="form.Tavatar"
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"

              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <!-- 用户名  -->
            <el-form-item label="用户名" prop="Aliname">
              <el-input
                v-model="form.Aliname"
                placeholder="请填写用户名"
                style="width:50%"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <!-- 昵称  -->
            <el-form-item label="昵称" prop="AliNum">
              <el-input
                v-model="form.AliNum"
                placeholder="请填写昵称"
                style="width:50%"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="性别">
              <el-radio-group v-model="form.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <!-- 提交按钮  -->
            <el-form-item>
              <el-button type="primary" >保存修改</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane  name="second" >
          <span slot="label"><i class="el-icon-warning-outline"></i> 安全设置</span>
          <div class="row">安全设置</div>
          <div class="all-left">
            <div class="one" v-if="allFalt">
              <div class="s1">
                <p>手机绑定</p>
                <p>131645978</p>
                <p @click="change('1')">更换手机</p>
              </div>
              <div class="s1">
                <p>微信绑定</p>
                <p></p>
                <p @click="change('2')">更换微信</p>
              </div>
              <div class="s1">
                <p>登录密码</p>
                <p>*********</p>
                <p @click="change('3')">修改登录密码</p>
              </div>
            </div>
            <div class="phoneBind">
              <span @click="back('1')" v-if="showBack"><i class="el-icon-back"></i>返回</span>
              <template v-if="phone1">
                <el-form>
                  <el-form-item label="原手机号是否能接收到短信?">
                    <el-radio label="1" v-model="radio">能</el-radio>
                    <el-radio label="2" v-model="radio">不能</el-radio>
                  </el-form-item>
                </el-form>
                <div><el-button type="primary" @click="nextStep">下一步</el-button></div>
              </template>
              <template v-if="phone1can">
                <el-form style="margin-top: 20px;">
                  <!-- 电话输入框 -->
                  <el-form-item  prop="phone">
                    <el-row>
                      <el-col :span="9">
                        <el-input v-model="form.phone" placeholder="手机号" prefix-icon="el-icon-phone"></el-input>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <!-- 电话验证码输入框 -->
                  <el-form-item  prop="rcode">
                    <el-row>
                      <el-col :span="5">
                        <el-input v-model="form.rcode" placeholder="短信验证码" prefix-icon="el-icon-lock"></el-input>
                      </el-col>
                      <el-col :span="3" :offset="1">
                        <el-button class="box-btn" type="primary">获取验证码</el-button>
                      </el-col>
                    </el-row>
                  </el-form-item>
                </el-form>
                <el-row style="margin-top: 20px">
                  <el-col :span="10">
                    <el-button  type="primary" style="width: 30%" @click="nextStepNewphone">下一步</el-button>
                  </el-col>
                </el-row>
              </template>
              <template v-if="phone1cannot">
                <el-row style="padding: 20px 0">
                  <el-col :span="10">请输入您的登录密码，以进行身份验证</el-col>
                </el-row>
                <el-row>
                  <el-col :span="10">
                    <el-input v-model="inputpassword" placeholder="请输入您的登录密码" show-password></el-input>
                  </el-col>
                </el-row>
                <el-row style="margin-top: 20px">
                  <el-col :span="10">
                    <el-button  type="primary" style="width: 30%" @click="nextStepNewphone">下一步</el-button>
                  </el-col>
                </el-row>

              </template>
              <template v-if="phone1cannotNewPhone">
                <div>请输入您的新手机号，以进行身份验证</div>
                <el-form style="margin-top: 20px;">
                  <!-- 电话输入框 -->
                  <el-form-item  prop="phone">
                    <el-row>
                      <el-col :span="9">
                        <el-input v-model="form.phone" placeholder="请输入新的手机号" prefix-icon="el-icon-phone"></el-input>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <!-- 电话验证码输入框 -->
                  <el-form-item  prop="rcode">
                    <el-row>
                      <el-col :span="5">
                        <el-input v-model="form.rcode" placeholder="请输入短信验证码" prefix-icon="el-icon-lock"></el-input>
                      </el-col>
                      <el-col :span="3" :offset="1">
                        <el-button class="box-btn" type="primary">获取验证码</el-button>
                      </el-col>
                    </el-row>
                  </el-form-item>
                </el-form>
                <br>
                <div><el-button type="primary" style="width: 30%" @click="sureChangePhone">确认更换</el-button></div>
              </template>

            </div>
          </div>

        </el-tab-pane>
        <el-tab-pane  name="night" >
          <span slot="label"><i class="el-icon-s-open"></i> 查看下级</span>
          <div class="row">查看下级</div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
              <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
            <!-- 下面卡片 -->
            <el-card class="box-card  box-card1">
              <el-table border style="width: 100%;" :data="tableForm">
                <el-table-column prop="end_time"  label="姓名"></el-table-column>
                <el-table-column prop="shop_name"  label="手机号"></el-table-column>
                <el-table-column prop="order_text"  label="客户编码"></el-table-column>
                <el-table-column prop="Waybill_Num" label="是否开通邀请返现"></el-table-column>
                <el-table-column prop="New_Num"  label="注册时间"></el-table-column>
                <el-table-column prop="money"  label="下级用户人数"></el-table-column>
              </el-table>
            </el-card>
          </el-form>

        </el-tab-pane>
        <el-tab-pane  name="third">
          <span slot="label"><i class="el-icon-s-finance"></i> 我的钱包</span>
          <div class="row">我的钱包</div>
          <div class="all-left">
            <div class="myPurse">
              <div>
                <span>我的余额 </span>
                <span style="font-weight: bold;font-size: 16px;">$863</span>
                <span><el-button type="primary" size="small">我要充值</el-button></span>
              </div>
              <div class="table_List">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <div style="margin-top: 20px;">充值历史</div>
                  <!-- 下面卡片 -->
                  <el-card class="box-card  box-card1">
                    <el-table  style="width: 100%;" :data="tableForm">
                      <el-table-column prop="end_time"  label="充值单号"></el-table-column>
                      <el-table-column prop="shop_name"  label="充值金额"></el-table-column>
                      <el-table-column prop="order_text"  label="钱包余额"></el-table-column>
                      <el-table-column prop="Waybill_Num" label="充值状态"></el-table-column>
                      <el-table-column prop="New_Num"  label="充值方式"></el-table-column>
                      <el-table-column prop="money"  label="充值时间"></el-table-column>
                    </el-table>
                  </el-card>
                </el-form>

              </div>
            </div>
          </div>

        </el-tab-pane>
        <el-tab-pane name="four">
          <span slot="label"><i class="el-icon-s-order"></i> 我的账单</span>
          <div class="row">我的账单</div>
          <div class="all-left">
            <div class="myTicket">
              <div>
                <span>当月账单 </span>
                <span style="font-weight: bold;font-size: 16px;">$12347</span>
<!--                <span><el-button type="primary" size="small">我要充值</el-button></span>-->
              </div>
              <div class="table_List">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <div style="margin-top: 20px;">最近流水</div>
                  <!-- 下面卡片 -->
                  <el-card class="box-card  box-card1">
                    <el-table  style="width: 100%;" :data="tableForm">
                      <el-table-column prop="end_time"  label="运单号"></el-table-column>
                      <el-table-column prop="shop_name"  label="流水类型"></el-table-column>
                      <el-table-column prop="order_text"  label="SKU"></el-table-column>
                      <el-table-column prop="Waybill_Num" label="流水金额"></el-table-column>
                      <el-table-column prop="New_Num"  label="钱包余额"></el-table-column>
                      <el-table-column prop="money"  label="流水时间"></el-table-column>
                    </el-table>
                  </el-card>
                </el-form>

              </div>
            </div>
          </div>

        </el-tab-pane>
        <el-tab-pane name="five">
          <span slot="label"><i class="el-icon-s-flag"></i> 使用教程</span>
          <div class="row">使用教程</div>
          <div class="all-left userteach">
            <el-tabs v-model="useTeach" :tab-position="tabPosition">

              <el-tab-pane  name="first">
              <span slot="label"><i class="el-icon-s-flag"></i> 海外仓教程</span>
                  <div class="waiTeach">
                    <div class="w1">
                      <p>一、 海外场教程</p>
                      <p>菜鸟大卖官方官方官方官方</p>
                    </div>
                    <div class="w2"> > </div>
                  </div>
                <div class="waiTeach">
                  <div class="w1">
                    <p>二、 海外场教程</p>
                    <p>菜鸟大卖官方官方官方官方</p>
                  </div>
                  <div class="w2"> > </div>
                </div>
              </el-tab-pane>
              <el-tab-pane  name="second">
                <span slot="label"><i class="el-icon-s-flag"></i> 虚拟仓教程</span>
                <div class="row">虚拟仓教程</div>
              </el-tab-pane>
            </el-tabs>
          </div>

        </el-tab-pane>
        <el-tab-pane name="six">
          <span slot="label"><i class="el-icon-question"></i> 常见问题</span>
          <div class="row">常见问题</div>
          <div class="all-left userteach">
            <el-tabs v-model="useTeach" :tab-position="tabPosition">

              <el-tab-pane  name="first">
                <span slot="label"><i class="el-icon-s-flag"></i> 海外仓问题</span>
                <div class="waiTeach">
                  <div class="w1">
                    <p>一、 海外场教程</p>
                    <p>菜鸟大卖官方官方官方官方</p>
                  </div>
                  <div class="w2"> > </div>
                </div>
                <div class="waiTeach">
                  <div class="w1">
                    <p>二、 海外场教程</p>
                    <p>菜鸟大卖官方官方官方官方</p>
                  </div>
                  <div class="w2"> > </div>
                </div>
              </el-tab-pane>
              <el-tab-pane  name="second">
                <span slot="label"><i class="el-icon-s-flag"></i> 虚拟仓问题</span>
                <div class="row">虚拟仓问题</div>
              </el-tab-pane>
            </el-tabs>
          </div>


        </el-tab-pane>
        <el-tab-pane name="seven">
          <span slot="label"><i class="el-icon-download"></i> 附件下载</span>
          <div class="row">附件下载</div>
          <div class="all-left userteach">
            <div class="waiTeach">
              <div class="w1">
                <p>一、 附件1</p>
                <p>附件1附件1附件1附件1</p>
              </div>
              <div class="w2"> > </div>
            </div>

          </div>


        </el-tab-pane>
        <el-tab-pane name="eight">
          <span slot="label"><i class="el-icon-ice-cream-square"></i> 物流费用报价</span>
          <div class="row">物流费用报价</div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
              <el-input placeholder="请输入运单号或订单号" v-model="formInline.rid" style="width:200px;" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
            <!-- 下面卡片 -->
            <el-card class="box-card  box-card1">
              <el-table border style="width: 100%;" :data="tableForm">
                <el-table-column prop="end_time"  label="退件到仓时间"></el-table-column>
                <el-table-column prop="shop_name"  label="平台和店铺"></el-table-column>
                <el-table-column prop="order_text"  label="订单详情"></el-table-column>
                <el-table-column prop="Waybill_Num" label="原运单号"></el-table-column>
                <el-table-column prop="New_Num"  label="新运单号"></el-table-column>
                <el-table-column prop="money"  label="收费"></el-table-column>
                <el-table-column prop="send_time"  label="发货时间"></el-table-column>
              </el-table>
            </el-card>
          </el-form>

        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        inputpassword:'',
        radio:'1',
        showBack:false,
        phoneFlat:false,
        phone1:false,
        phone1can:false,
        phone1cannot:false,
        phone1cannotNewPhone:false,
        allFalt:true,
        inviteOpen:true,
        imageUrl: "",
        // 跟表单元素双向绑定的对象
        form: {
            // 正面身份证
            Tavatar: "",
            // 反面身份证
            Favatar: "",
            // 微信二维码
            wxImg: "",
            // 支付宝姓名
            Aliname: "",
            // 支付宝账号
            AliNum: "",
            // 重复支付宝账号
            AliNumber: "",
            // 手机号码
            phone: "",
            // 手机验证码
            rcode: "",
            agree: true,
        },
        // 规则对象
        rules: {
            // 正面身份证规则
            Tavatar: [{ required: true, message: "请选择图片", trigger: "change" }],
            // 用户名规则
            Aliname: [
                { required: true, message: "用户名不能为空", trigger: "blur" },
            ],
            // 昵称规则
            AliNum: [
                { required: true, message: "昵称不能为空", trigger: "blur" },
            ]
        },
        tabPosition: 'left',
        activeName: "first",
        // 上面行内表单绑定的对象
        formInline: {
            rid:"",
        },
        tableForm:[
            {
                end_time:'2020/08/16',
                shop_name:'云仓一号',
                order_text:'XXXX',
                Waybill_Num:'20200816001',
                New_Num:'20200817005',
                money:'20',
                ending_time:'2020/08/17',
                send_time:'2020/08/16',
            },
            {
                end_time:'2020/08/16',
                shop_name:'云仓一号',
                order_text:'XXXX',
                Waybill_Num:'20200816001',
                New_Num:'20200817005',
                money:'20',
                ending_time:'2020/08/17',
                send_time:'2020/08/16',
            },
            {
                end_time:'2020/08/16',
                shop_name:'云仓一号',
                order_text:'XXXX',
                Waybill_Num:'20200816001',
                New_Num:'20200817005',
                money:'20',
                ending_time:'2020/08/17',
                send_time:'2020/08/16',
            },
            {
                end_time:'2020/08/16',
                shop_name:'云仓一号',
                order_text:'XXXX',
                Waybill_Num:'20200816001',
                New_Num:'20200817005',
                money:'20',
                ending_time:'2020/08/17',
                send_time:'2020/08/16',
            },
            {
                end_time:'2020/08/16',
                shop_name:'云仓一号',
                order_text:'XXXX',
                Waybill_Num:'20200816001',
                New_Num:'20200817005',
                money:'20',
                ending_time:'2020/08/17',
                send_time:'2020/08/16',
            },
        ]
    }
  },
  methods: {
      sureChangePhone(){
        alert("确认更换")
      },
      nextStep(){
          if(this.radio == '1'){ //能接收短信
              this.phone1can = true
              this.phone1 = false
          }
          if(this.radio == '2'){ //不能
              this.phone1cannot = true
              this.phone1 = false
          }

      },
      nextStepNewphone(){
          this.phone1can = false
          this.phone1cannot = false
          this.phone1cannotNewPhone = true
      },
      back(index){
          this.showBack = false
          this.phone1 = false
          this.phone1can = false
          this.phone1cannot = false
          this.phone1cannotNewPhone = false
          this.allFalt = true
          if(index == 1){
              // this.phoneFlat = !this.phoneFlat
          }
          if(index == 2){
              console.log(index)
          }
          if(index == 3){
              console.log(index)
          }

      },
      change(index){
          this.showBack = true
          this.allFalt = false
          if(index == 1){
              this.phone1 = !this.phone1
              // console.log(index)
          }
          if(index == 2){
              this.phone1can = !this.phone1can
          }
          if(index == 3){
              console.log(index)
          }
      },
      handleClick(tab, event) {
          console.log(tab)
          console.log(event)
          // console.log(tab, event);
      },
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style lang="scss" >
  .user-container {
    margin: 10px 10px 0;
    .box-card {
      margin: 30px;
      .box-card1{
        margin: 0;
      }
    }
    /*上传图片样式*/
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
      .el-tabs{
        height: 100%;
        .el-tabs__header{
          .el-tabs__nav-wrap{
            .el-tabs__item{
              height: 50px;
              display: flex;
              align-items: center;
            }
            .el-tabs__item .is-left{
              text-align: left !important;
            }
            .el-tabs__item.is-active{
              background: #ECF5FF;
            }
            .el-tabs__active-bar{
              width: 3px;
              height: 50px;
            }
          }
        }
        .el-tabs__content{
          .row{
            border-bottom: 1px solid #EEE;
            padding: 20px 0;
            margin-bottom: 30px;
            font-weight: bold;
            margin-left: 20px;
          }
          .all-left{
            margin-left: 20px;
            .one{
              .s1{
                display: flex;
                margin: 30px 0;
                p{
                  margin-right: 20px;
                }
                p:last-child{
                  color: #409EFF;
                  cursor: pointer;
                }
              }
            }
            .phoneBind{

            }



          }
          .userteach{
            .waiTeach:hover{
              background: #EEEEEE;
            }
            .waiTeach{
              cursor: pointer;
              display: flex;border-bottom: 1px solid #EEE;justify-content: space-between;align-items: center;padding: 0 20px;
              .w1{
                p:nth-child(1){
                  font-size: 16px;
                }
                p:nth-child(2){
                  font-size: 14px;
                  color: #999999;
                }
              }
              .w2{

              }
            }
          }
        }
      }
  }

</style>


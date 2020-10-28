<template>
<div class="box">
  <div class="invite" v-if="inviteOpen">
    <el-card class="box-card">
      <div class="main">
        <b>邀请返现说明:</b>
        <p>通过链接或者二维码邀请注册，你可以获得被邀请人每次充值金额的4%作为奖励，你的上级将获得被邀请人每次充值金额的2%作为奖励，上不封顶</p>
        <p>假如A邀请B，B邀请C，C充值1000元，B获得40元，A获得20元。</p>
        <el-button type="primary" @click="btnOpen">开通邀请功能</el-button>
      </div>
    </el-card>
  </div>
  <div class="opening" v-if="!inviteOpen">
    <el-card class="box-card">
      <div class="main">
        <el-form ref="regForm" label-width="200px" :model="form" :rules="rules">
          <!-- 上传正面照片  -->
          <el-form-item label="上传身份证正面照片：" prop="Tavatar">
            <el-upload
              v-model="form.Tavatar"
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <!-- 上传反面照片  -->
          <el-form-item label="上传身份证反面照片：" prop="Favatar">
            <el-upload
              v-model="form.Favatar"
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <!-- 上传微信二维码图片  -->
          <el-form-item label="上传微信二维码图片：" prop="wxImg">
            <el-upload
              v-model="form.wxImg"
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <!-- 支付宝姓名  -->
          <el-form-item label="收款支付宝姓名" prop="Aliname">
            <el-input
              v-model="form.Aliname"
              placeholder="请填写支付宝姓名"
              style="width:50%"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <!-- 收款支付宝账号  -->
          <el-form-item label="收款支付宝账号" prop="AliNum">
            <el-input
              v-model="form.AliNum"
              placeholder="请填写收款支付宝账号"
              style="width:50%"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <!-- 确认收款支付宝账号  -->
          <el-form-item label="确认收款支付宝账号" prop="AliNum">
            <el-input
              v-model="form.AliNumber"
              placeholder="请确认收款支付宝账号"
              style="width:50%"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <!-- 手机号码  -->
          <el-form-item label="手机号码" prop="phone">
            <el-input
              v-model="form.phone"
              placeholder="请填写手机号码"
              style="width:50%"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <!-- 短信验证码  -->
          <el-form-item label="短信验证码" prop="rcode">
            <el-input v-model="form.rcode" placeholder="短信验证码" style="width:15%;margin-right:20px"></el-input>
            <el-button type="primary">获取短信验证码</el-button>
          </el-form-item>

          <!-- 协议  -->
          <el-form-item prop="agree">
            <div style="display:flex;align-items:center;">
              <el-checkbox v-model="form.agree" class="agree"></el-checkbox>
              <span>自愿申请邀请功能，承诺账号为唯一实名账号，如有多账号行为，平台有权对账号封禁，并没收推广所得</span>
            </div>
          </el-form-item>

          <!-- 提交按钮  -->
          <el-form-item>
            <el-button type="primary" @click="submit">申请提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

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
        // 反面身份证规则
        Favatar: [{ required: true, message: "请选择图片", trigger: "change" }],
        // 微信二维码规则
        wxImg: [{ required: true, message: "请选择图片", trigger: "change" }],

        // 支付宝用户名规则
        Aliname: [
          { required: true, message: "支付宝用户名不能为空", trigger: "blur" },
        ],

        // 支付宝账号规则
        AliNum: [
          { required: true, message: "支付宝账号不能为空", trigger: "blur" },
        ],

        // 手机验证码规则
        rcode: [
          { required: true, message: "手机验证码不能为空", trigger: "blur" },
          { len: 4, message: "手机验证码是4位", trigger: "blur" },
        ],

        // 手机号码规则
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            pattern: /0?(13|14|15|18|17)[0-9]{9}/,
            message: "手机号格式错误",
            trigger: "blur",
          },
        ],
        agree: [
          // 多选框没有失去焦点，只有值改变事件
          // 因为checkbox其实他不可能值为空，除非你强行赋值为空
          // 所以我们不能拿值是否为空来做验证了
          // { required:true, message:'必须勾选同意用户协议',trigger:"change"},

          // 只有值为true才满足条件，否则代表不匹配
          {
            pattern: /true/,
            message: "必须勾选",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods:{
    btnOpen(){
      this.inviteOpen = !this.inviteOpen
    },
    // 提交按钮点击事件
    submit() {
      console.log(111);
      // 找到表单对象,调用validate方法
      this.$refs.regForm.validate((v) => {
        if (v) {
          alert("全部通过");
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  }
}
</script>

<style lang="scss">
.box{
  .invite{
  margin: 10px 10px 0;

  .box-card{
    margin: 20px;

    .main{
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;

      p{
        /*color: #E6A23C;*/
      }
    }
  }
}
.opening {
  margin: 10px 10px 0;

  .box-card {
    margin: 20px;

    .main {
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
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

      .agree {
        margin-right: 10px;
      }
    }
  }
}
}
</style>

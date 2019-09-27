<template>
  <div>
    <div style="margin-bottom: 3rem;">
      <div class="margin15 stepone">
        <div class="title">
          <div class="title1">职位标题</div>
          <div class="title2">
            <span>0</span>
            <span>/</span>
            <span>20</span>
          </div>
        </div>
        <input type="type" maxlength="20" placeholder="例：（企业名称）招聘设计兼职" class="input" />
      </div>
      <div class="margin15 stepone">
        <div class="work">
          <div class="work1">工作内容</div>
          <div class="work2">
            <span>0</span>
            <span>/</span>
            <span>1000</span>
          </div>
        </div>
        <input type="textarea" maxlength="1000" placeholder="请输入工作内容、工作要求" class="input1" />
      </div>
      <div class="margin15 stepone">
        <div class="title">
          <div class="title1">工作区域</div>
        </div>
        <input type="type" placeholder="请选择工作区域" class="input" />
      </div>
      <div class="margin15 stepone">
        <div class="title">
          <div class="title1">详细地址</div>
        </div>
<<<<<<< HEAD
        <div>
          <input type="type" placeholder="请选择地址" class="input2" />
        </div>
=======
        <input type="type" placeholder="请选择地址" class="input" />
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
      </div>
      <div class="margin15 stepone">
        <div class="btn">
          <button @click="before()">上一步</button>
          <button @click="next()">下一步</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    before() {
      this.$router.push("/part-time");
    },
    next() {
      this.$router.push("/part-time/releasethree");
    }
  }
};
</script>

<style scoped lang="less">
.stepone {
  margin-top: 1.2rem;
  .title,
  .work {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    .title1,
    .work1 {
      font-weight: 600;
      color: 0a0a0a;
    }
    .title2,
    .work2 {
      color: #c8c8c8;
      span {
        margin-left: 0.3125rem;
      }
    }
  }
  .input {
    line-height: 1.875rem;
    width: 100%;
    text-indent: 0.625rem;
    border: none;
    border-bottom: 0.00625rem solid #eee;
    color: #767676;
  }
  .input1 {
    height: 5.625rem;
    width: 100%;
    text-indent: 0.625rem;
    border: none;
    border-bottom: 0.00625rem solid #eee;
  }
<<<<<<< HEAD
  .input2 {
    line-height: 1.875rem;
    width: 100%;
    text-indent: 0.625rem;
    border: none;
    border-bottom: 0.00625rem solid #eee;
    color: #767676;
  }
  img {
    display: block;
    width: 0.5rem;
    height: 0.5rem;
  }
=======
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
}
.btn {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  button {
    width: 6.25rem;
    height: 1.8rem;
    background: linear-gradient(
      140deg,
      rgba(14, 204, 145, 1),
      rgba(70, 229, 149, 1)
    );
    box-shadow: 0px 0px 13px 1px rgba(9, 187, 132, 0.25);
    border-radius: 0.92rem;
    font-size: 0.64rem;
    color: white;
    margin: 0 auto;
    border: none;
  }
}
</style>
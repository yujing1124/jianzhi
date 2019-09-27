<template>
  <div>
    <div style="margin-bottom: 3rem;">
      <div class="margin15 stepone">
        <div>基本薪资：</div>
        <div class="money">
          <input type="text" />元
          <span style="margin-left:.9375rem;">小时</span>
          <span>天</span>
          <span>周</span>
          <span>月</span>
          <span class>次</span>
        </div>
        <div>
          招聘人数：
          <input type="text" />人
        </div>
        <div>
          <div class="xian">
            结算方式:
            <span class="pay">请选择结算方式</span>
          </div>
        </div>
        <div>
          <div class="xian">
            性别选择：
            <span class="pay">请选择性别</span>
          </div>
          <div class="xian">
            选择年龄（不限年龄默认最小年龄为18岁）：
            <span class="min">最小年龄:</span>
            <span class="age">不限年龄</span>
            <span class="max">最大年龄:</span>
            <span class="age">不限年龄</span>
          </div>
          <div class="xian">
            选择工作日期
            <br />
            <span class="min">开始日期:</span>
            <span class="age">2019.9</span>
            <span class="max">结束日期:</span>
            <span class="age">2019.9</span>
          </div>
          <div class="xian">
            选择工作时间
            <br />
            <span class="min">开始时间:</span>
            <span class="age">00:00</span>
            <span class="max">结束时间:</span>
            <span class="age">00:00</span>
          </div>
          <div class="xian">
            是否缴纳诚信金
						<img src="../../assets/img/icons/question-icon.png" alt="">
            <el-radio-group v-model="radio" 
						text-color="blue"
						>
              <el-radio :label="3">不收取诚信金</el-radio>
              <el-radio :label="6">收取诚信金项</el-radio>
              <el-radio :label="9">只招会员</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
			radio: 3
		};
  },
  mounted() {}
};
</script>

<style scoped lang="less" >
.stepone {
  margin-top: 1.2rem;
  div {
    color: #333;
    margin: 0.9375rem 0;
    input {
      border: none;
      width: 1.875rem;
      border-bottom: 0.0625rem solid #e6e6e6;
      margin-right: 0.125rem;
    }
    span {
      display: inline-block;
      width: 1.875rem;
      line-height: 1.25rem;
      border: 1px solid #e6e6e6;
      border-right: none;
      text-align: center;
    }
    span:nth-child(6) {
      border-right: 1px solid #e6e6e6;
    }
    span:hover {
      background-color: #0abf88;
      color: #fff;
    }
    .xian {
      border-bottom: 1px solid #e6e6e6;
      .pay {
        display: inline-block;
        border: none;
        width: 5rem;
      }
      .min,
      .age {
        border: none;
        width: 2.9375rem;
        margin: 0.625rem 0.0625rem;
      }
      .max {
        border: none;
        width: 2.9375rem;
        margin-left: 1.25rem;
			}
			img{
				line-height: .75rem;
				width:.75rem;
			}
    }
  }
}
</style>
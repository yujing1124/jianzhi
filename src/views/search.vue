<template>
    <div class="searchWrap margin15 space-between">
      <div class="search">
        <img src="../assets/img/icons/search.png" />
        <input type="text" name="" id="" value="" placeholder="搜索你感兴趣的兼职" />
      </div>
      <div class="cancel">取消</div>
    </div>
</template>

<script>
  export default {
    name: 'search',
  }
</script>

<style scoped lang="less">
  .searchWrap{
    margin-top: 2rem
  }
  .cancel{
    font-size: 14px;
    line-height:1.08rem ;
  }
  .search {

    position: relative;
    width: 80%;
    img {
      width: 0.56rem;
      height: 0.56rem;
      position: absolute;
      top: 0.2rem;
      left: 0.48rem;
    }
    input {
      width: 100%;
      background: #F4F5F6;
      border-radius: 0.56rem;
      border: none;
      height: 1.08rem;
      padding-left: 1.24rem;
      font-size: 0.48rem;
      box-sizing: border-box;
    }
  }
</style>

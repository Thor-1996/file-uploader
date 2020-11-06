<template>
  <div>
    <el-upload action="http://localhost:3000/upload">
      <el-button type="primary">上传</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped></style>

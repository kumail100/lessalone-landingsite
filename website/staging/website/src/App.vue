<template>
  <div class="col-lg-12 col-12 mt-4" id="less-alone-chattext">
    <ChatBox />
  </div>
</template>


<script>
import ChatBox from './components/ChatBox.vue';

export default {
  name: 'App',
  components: {
    ChatBox,
  },
};
</script>

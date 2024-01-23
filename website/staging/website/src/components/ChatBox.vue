<template>
    <div class="col-lg-6 col-12 mx-auto">
        <div class="custom-form chatbot-form" role="form">
        <img class="img-fluid mx-auto" src="images/therapist.png">
            <div class="row">
              <div class="col-lg-12 col-12 mt-4 messageBox" id="less-alone-chattext">
                
                <template v-for="(message, index) in messages" :key="index">
                  <div :class="message.from == 'user' ? 'messageFromUser' : 'messageFromChatGpt'">
                    <div :class="message.from == 'user' ? 'userMessageWrapper' : 'chatGptMessageWrapper'">
                      <div :class="message.from == 'user' ? 'userMessageContent' : 'chatGptMessageContent'">{{ message.data }}</div>
                    </div>
                  </div>
                </template>
            </div>
            <div class="col-lg-12 col-12 mt-4 inputContainer">
              <input name="chatbot-prompt" id="chatbot-prompt"
                v-model="currentMessage"
                type="text"
                class="messageInput"
                placeholder="Ask me anything..."
              />
              <button
                @click="sendMessage(currentMessage)"
                class="askButton"
              >
                Send
              </button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChatBox',
  data() {
    return {
      currentMessage: '',
      messages: [],
    };
  },
  methods: {
    async sendMessage(message) {
      this.messages.push({
        from: 'user',
        data: message,
      });
      await axios
        .post('http://localhost:3000/ask-to-chat-gpt', {
          message: message,
        })
       .then((response) => {
          this.messages.push({
            from: 'chatGpt',
            data: response.data.data, // Access the 'data' property of the response object
          });
        });
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-fluid{
  width: 100%;
  max-width: 700px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

input {
 width: 100%;
 max-width: 400px;
 padding: 11px;
 border-color: #92d7ef;
 border-style: solid;
 border-top-left-radius: 10px;
 border-bottom-left-radius: 10px;
}


button {
 height: 50px;
 background-color: #92d7ef;
 padding: 10px;
 border: 0px;
 border-top-right-radius: 10px;
 border-bottom-right-radius: 10px;
}

.messageBox {
 height: 200px;
 width: 100%;
 padding: 5%;
 overflow-y: auto;
}


.messageFromUser {
 color: white;
 text-align: right;
 background-color: #5a6f80;
 border-radius: 10px;
 padding: 10px;
 margin-top: 15px;
 margin-bottom: 15px;
 width: 50%;
 margin-left: 50%;
}


.messageFromChatGpt {
 text-align: left;
 background-color: #92d7ef;
 border-radius: 10px;
 padding: 10px;
 margin-top: 15px;
 margin-bottom: 15px;
 width: 50%;
 margin-right: 5s0%;
}
</style>
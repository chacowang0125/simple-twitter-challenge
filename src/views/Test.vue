<template>
  <div>
    <input type="text" v-model="text" />
    <br />
    <button @click="send">send</button>
    <br />
    <span> {{ this.return }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      return: "",
    };
  },
  sockets: {
    connect: function () {
      console.log("socket connected");
    },
    return(data) {
      console.log("Page：" + data);
    },
  },
  methods: {
    send() {
      this.$socket.emit("message", {
        message: this.text,
      });
      this.text = "";
      this.$socket.on("return", (data) => {
        console.log(data);
      });
    },
  },
};
</script>



<template>
  <div class="main">
    <div class="main-item">
      <label for="title">Heading</label>
      <input type="text" id="title" required0 v-model="ticketData.title" />
    </div>
    <div class="main-item">
      <label for="description">Description</label>
      <textarea
        type="text"
        id="description"
        required
        v-model="ticketData.description"
      ></textarea>
    </div>
    <div class="main-item">
      <label for="loadfile"
        ><span class="input_file-button-text">{{
          displayLoadFile
        }}</span></label
      >
      <input
        type="file"
        id="loadfile"
        ref="file"
        multiple
        accept="image/jpeg"
        @change="handelFileUpload()"
      />
      <div>{{ ticketData.file.name }}{{ this.ticketData.file }}</div>
    </div>
    <div class="btn-block">
      <button @click="reqCreateTicket">Create</button>
      <button @click="clearAllInput">Clear</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: function () {
    return {
      ticketData: {
        title: "",
        description: "",
        file: "",
      },
      createdFlag: false,
    };
  },
  methods: {
    ...mapActions("mainstore", { reqUploadFile: "reqUploadFile" }),

    reqCreateTicket() {
      let data = this.createTicket();
      this.$emit("createticket", data);
      this.sendFile(data._id);
      this.clearAllInput();
    },
    createTicket() {
      let obj = {};
      if (this.allTickets && this.allTickets.length > 0) {
        let length = this.allTickets.length;
        obj.id = this.allTickets[length - 1].id + 1;
      } else {
        obj.id = 1;
      }
      obj.state = "active";
      obj.title = this.ticketData.title;
      obj.description = this.ticketData.description;
      obj.comments = [];
      obj.file = this.ticketData.file;
      return obj;
    },
    clearAllInput() {
      this.ticketData.title = "";
      this.ticketData.description = "";
      this.ticketData.file = "";
    },
    handelFileUpload() {
      this.ticketData.file = this.$refs.file.files[0];
    },
    sendFile(_id) {
      if (this.ticketData.file !== "") {
        let formData = new FormData();
        formData.append("file", this.ticketData.file);
        this.reqUploadFile({ _id, formData: formData });
      }
    },
  },
  computed: {
    ...mapGetters("mainstore", { allTickets: "allTickets" }),
    displayLoadFile() {
      return this.ticketData.file !== "" ? "Uploaded" : "Load file";
    },
  },
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;

  border: 2px solid #1bbc9b;
  padding: 10px;
  overflow: hidden;
  box-shadow: 0 0 5px #1bbc9b;
}
.main-item {
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem;
}
label {
  margin-bottom: 10px;
  font-size: 1.2rem;
}
#title {
  padding: 5px;
  border: 2px solid #1bbc9b;
}
#description {
  padding: 5px;
  resize: vertical;
  border: 2px solid #2c8371;
}
#loadfile {
  opacity: 0;
  visibility: hidden;
}
.input_file-button-text {
  display: block;
  width: 100%;
  background: #1bbc9b;
  padding: 10px 0px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.ticketCreated {
  font-size: 1.5rem;
}
.btn-block {
  display: flex;
  justify-content: space-around;
  margin: 2rem 0rem;
}
button {
  font-size: 1.2rem;
  color: #fff;
  border-radius: 5px;
  border: 0;
  background: #1bbc9b;
  padding: 7px 50px;
  cursor: pointer;
}
.ticket-created {
  display: flex;
  flex-direction: column;
}
.create-text {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
</style>

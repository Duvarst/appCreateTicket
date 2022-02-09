import {
  getData,
  getDataByState,
  getDataByTitle,
} from "../api/ApiDataGetReq.js";
import {
  postData,
  updateTicketComment,
  updateTicketState,
} from "../api/ApiDataPostPutReq.js";
import { uploadFile } from "../api/ApiDataUploadFIle.js";

export default {
  namespaced: true,
  state: {
    listAllTicket: [],
  },
  getters: {
    allTickets: (state) => state.listAllTicket,
    oneTicket: (state) => (id) => state.listAllTicket.find((e) => e._id == id),
  },
  mutations: {
    setData(state, data) {
      state.listAllTicket = data;
    },
    addTicket(state, data) {
      state.listAllTicket.push(data);
    },
    addComment(state, { _id, result }) {
      let elem = state.listAllTicket.find((e) => e._id == _id);
      elem.comments = result.comments;
    },
    stateChange(state, { _id, result }) {
      let elem = state.listAllTicket.find((e) => e._id == _id);
      elem.state = result.state;
    },
    setFile(state, { _id, result }) {
      let ticket = state.listAllTicket.find((e) => e._id == _id);
      console.log(ticket, result);
    },
  },
  actions: {
    async reqGetData({ commit }) {
      const result = await getData();
      commit("setData", result);
    },
    async reqGetDataByState({ commit }, stateValue) {
      let result = await getDataByState(stateValue);
      commit("setData", result);
    },
    async reqGetDataByTitle({ commit }, titleValue) {
      let result = await getDataByTitle(titleValue);
      commit("setData", result);
    },
    async reqUpdateTicketComment({ commit, state }, { _id, text }) {
      let ticket = state.listAllTicket.find((e) => e._id == _id);
      let commentsArr = ticket.comments.slice(0);
      commentsArr.push(text);
      const result = await updateTicketComment(_id, commentsArr);
      commit("addComment", { _id, result });
    },
    async reqUpdateTicketState({ commit }, { _id, stateValue }) {
      const result = await updateTicketState(_id, stateValue);
      commit("stateChange", { _id, result });
    },
    async reqUploadFile({ commit }, { _id, formData }) {
      let result = await uploadFile(formData);
      commit("setFile", { _id, result });
    },
    async addTicket({ commit }, data) {
      let result = await postData(data);
      commit("addTicket", result);
    },
  },
};

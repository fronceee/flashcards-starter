import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

export const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = {
        ...action.payload,
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      const { topicId, quizId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;

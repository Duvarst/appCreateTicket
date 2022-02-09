import axios from "axios";

export async function postData(data) {
  try {
    const result = await axios.post(
      "http://localhost:5000/api/tickets",
      {
        id: data.id,
        state: data.state,
        title: data.title,
        description: data.description,
        comments: data.comments,
        file: data.file,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        mode: "cors",
      }
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
}

export async function updateTicketComment(_id, data) {
  try {
    const result = await axios.put(
      `http://localhost:5000/api/tickets/comment`,
      {
        _id: _id,
        comments: data,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        mode: "cors",
      }
    );
    console.log(result);
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
export async function updateTicketState(_id, stateValue) {
  try {
    const result = await axios.put(
      `http://localhost:5000/api/tickets/state`,
      {
        _id: _id,
        state: stateValue,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        mode: "cors",
      }
    );
    console.log(result);
    return result.data;
  } catch (e) {
    console.log(e);
  }
}

import axios from "axios";

export async function getData() {
  try {
    const result = await axios.get("http://localhost:5000/api/tickets", {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      mode: "cors",
    });
    console.log(result);
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
export async function getDataByState(stateValue) {
  try {
    const url = `http://localhost:5000/api/tickets/state/${stateValue}`;
    console.log(url);
    const result = await axios.get(url, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      mode: "cors",
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
export async function getDataByTitle(titleValue) {
  try {
    const url = `http://localhost:5000/api//tickets/title/${titleValue}`;
    console.log(url);
    const result = await axios.get(url, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      mode: "cors",
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
export async function getDataOne() {
  try {
    const result = await axios.get(
      "http://localhost:5000/api/tickets/620116a937f0d8272cfa2adc",
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

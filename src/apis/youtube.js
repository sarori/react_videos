import axios from "axios";

const KEY = "AIzaSyDvEzNWSMHBaKSU5UTgih56l2RfsuyWIBc";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: `${KEY}`
	}
});

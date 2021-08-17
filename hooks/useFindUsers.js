import { useEffect, useState } from "react";
import axios from "axios";

export function useFindUsers() {
const [data, setData] = useState([]);

async function listUsers() {
	try {
		const response = await axios.get("https://jsonplaceholder.typicode.com/users");
		setData(response.data);
	}
	catch (err) {
		console.log(err);
	}
}

useEffect(() => {
	listUsers();
}, []);

return data;
}

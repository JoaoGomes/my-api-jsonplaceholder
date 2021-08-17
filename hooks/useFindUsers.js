import { useEffect, useState } from "react";
import axios from "axios";

export function useFindUsers() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function listUsers() {
	    try {
		    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
		    setLoading(false);
            if(response.data) {
                setData(response.data);
            }
            else {
                setData([]);
            }
	    }
	    catch (err) {
            setError("Lamento, ocorreu um erro!");
            setData([]);
            setLoading(false);
	    }
    }

    useEffect(() => {
        setLoading(true);
        setError(null);
	    listUsers();
    }, []);

    return { data, loading, error };
}

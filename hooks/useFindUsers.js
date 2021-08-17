import { useEffect, useState } from "react";
import axios from "axios";

export function useFindUsers() {

    const [state, setDataState] = useState({
        loading: true,
        data: [],
        error: null,
    });

    async function listUsers() {
	    try {
		    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

            if(response.data) {
                setDataState({ data: response.data, loading: false });
            }
            else {
                setDataState({ data: [], loading: false });
            }
	    }
	    catch (err) {
            setDataState({ data: [], loading: false, error: "Lamento, ocorreu um erro!" });
	    }
    }

    useEffect(() => {
        setDataState({ loading: true, error: null });
	    listUsers();
    }, []);

    return { state };
}

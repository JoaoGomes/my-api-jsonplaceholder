import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
    loading: true,
    data: [],
    error: null,
};

const reduce = (state, action) => {
    switch (action.type) {
        case "OnSuccess":
            return {
                loading: false,
                data: action.payload,
                error: null,
            };
        case "OnFetching":
            return {
                loading: true,
                data: [],
                error: null,
            };
        case "OnFailure":
            return {
                loading: false,
                data: [],
                error: "Lamento, ocorreu um erro.",
            };
        default:
            return state;
    }
};

export function useFindUsersReducer(search) {

    const [state, dispatch] = useReducer(reduce, initialState);

    useEffect(() => {

        async function listUsers() {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    
                if(response.data) {
                    dispatch({ type: "OnSuccess", payload: response.data });
                }
                else {
                    dispatch({ type: "OnFailure" });
                }
            }
            catch (err) {
                dispatch({ type: "OnFailure" });
            }
        }
    
        dispatch({ type: "OnFetching" });
	    listUsers();
    }, []);

    return { state };
}

import axios from "axios";

export const fetchGroceries = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:3000/api/v1/admin/get-grocery-items"
            );
           return response.data
        } catch (error) {
            console.error("Error fetching groceries:", error);
            throw error;
        }
    };
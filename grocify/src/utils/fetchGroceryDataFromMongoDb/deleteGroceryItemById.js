
import { deleteGroceryItemById } from "../../services/DeleteGrocertItemById";

export const handleDelete = async (id, navigate) => {
	const isConfirmed = window.confirm(
		"Are you sure you want to delete this item?"
	);
	if (!isConfirmed) return;

	try {
		await deleteGroceryItemById(id);
		alert("Grocery item deleted successfully!");
		navigate("/get-grocery");
	} catch (err) {
		alert("Failed to delete item.");
	}
};

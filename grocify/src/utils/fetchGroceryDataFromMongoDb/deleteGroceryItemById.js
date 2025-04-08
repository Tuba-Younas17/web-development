import { deleteGroceryItemById } from "../../services/grocifyCrudServices/deleteGrocertItemById";

export const handleDelete = async (id) => {
	const isConfirmed = window.confirm(
		"Are you sure you want to delete this item?"
	);
	if (!isConfirmed) return;

	try {
		await deleteGroceryItemById(id);
	} catch (err) {
		// Already handled by toast
	}
};

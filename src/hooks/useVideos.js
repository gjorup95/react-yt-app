import { useState, useEffect } from "react";
import Youtube from "../api/Youtube";

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async (term) => {
		const response = await Youtube.get("/search", {
			params: { q: term },
		});
		setVideos(response.data.items);
	};
	// return [videos, onTermSubmit]; // react conversion
	return [videos, search];
};
export default useVideos;

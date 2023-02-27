import { useEffect, useState } from "react"
import axios from "axios"

async function getData() {
	const res = await axios.get("https://api.themoviedb.org/4/list/1?api_key=2cef5a96729c3b19917f189de0c62e16")
	return res;
}


export default function HomePage() {
	let [data, setData] = useState([])



	useEffect(() => {
		axios.get("https://api.themoviedb.org/4/list/2?api_key=2cef5a96729c3b19917f189de0c62e16")
			.then(res => {
				setData(res.data.results)
				// console.log(res.data.results)
			}).catch(err => console.log(err))

	}, [])

	// data.foreach((elem) => console.log(elem));

	// console.log(data);
	return (
		<div>
			{data.map((elem, index) => (
				<img key={index} src={`https://image.tmdb.org/t/p/w500/${elem.backdrop_path}`} />
			))}
		</div>
	)

}
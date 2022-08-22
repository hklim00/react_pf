import axios from 'axios';

export const getFlickr = async (opt) => {
	const key = '700ca468bc8ad00386eefdfab82845a1';
	const method_user = 'flickr.people.getPhotos';
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const num = 50;
	console.log(opt);

	let url = '';
	//객체로 전달되는 type에 따라 호출한 URL을 새로 만들고 axios에 전달
	if (opt.type === 'interest')
		url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
	if (opt.type === 'user')
		url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
	if (opt.type === 'search')
		url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tag}`;

	return await axios.get(url);
};

export const getYoutube = async () => {
	const key = 'AIzaSyBDL1S8asY8CR73ihG02orQB3BdWha5F1A';
	const playlistId = 'PL_RxE5V-zXWLz8bPJ5xi6dsdqg2mnwgPr';
	const num = 6;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	return await axios.get(url);
};

export const getMembers = async () => {
	const url = process.env.PUBLIC_URL + '/DB/members.json';
	return await axios.get(url);
};

import { params } from './settings';

async function getImgurGallery({address, query, headers }) {

    const url = `https://api.imgur.com/3/gallery/t/${address.tag}/${address.sortType}/all/${address.page}`;
    const queryParams = new URLSearchParams(query);

    let result = fetch(`${url}?${queryParams}`, {
        method: 'GET',
        headers: headers
    })
        .then(successResponse => {
            return (successResponse.status === 200 ? successResponse.json() : null);
        },
            failResponse => {
                return null;
            });

    let data = await result;
    return data;
}

const getImgurGalleryResponse = await getImgurGallery(params);

console.log(getImgurGalleryResponse);

export { getImgurGalleryResponse }


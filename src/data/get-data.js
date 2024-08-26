const getImgurGalleryResponse = require('./data.json');
// import {getImgurGalleryResponse} from '../imgur/getItemsImgur'

function getImages(response) {

    const items = response.data.items.filter(((item, i) => i < 30)).map(item => {
        const img = item.images.find(img => ['image/jpeg', 'image/jpeg'].includes(img.type));
        return img ? {
            id: item.id,
            title: item.title,
            img: {
                type: img.type,
                link: img.link,
                width: img.width,
                height: img.height
            }
        } : null;
    }).filter((item,i) => item);
    return items;
}

const imageList = getImages(getImgurGalleryResponse);

export { imageList };

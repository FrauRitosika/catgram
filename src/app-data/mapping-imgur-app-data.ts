import { ApiGetImageResponse} from '../imgur/get-image';
import {PostContent} from './types';

const getImgurGalleryResponse: ApiGetImageResponse = require('./data.json');
// import {getImgurGalleryResponse} from '../imgur/getItemsImgur'

function getImages(response: ApiGetImageResponse): Array<PostContent> {

    const list = response.data.items.filter(((item, i) => i < 30)).map(item => {
        const img = item.images.find(img => ['image/jpeg', 'image/png'].includes(img.type));
        return img ? {
            id: item.id,
            title: item.title,
            img: {
                id: img.id,
                type: img.type,
                link: img.link,
                width: img.width,
                height: img.height
            }
        } : null;
    }).filter((item,i) => item !== null);

    return list;
}

const imageList = getImages(getImgurGalleryResponse);

export { imageList };

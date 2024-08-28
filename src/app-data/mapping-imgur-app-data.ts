import { ApiGetGalleryResponse} from '../imgur/types-image';
import {PostContent} from './types';


// import {getImgurGalleryResponse} from '../imgur/getItemsImgur'

export default function getImages(): Array<PostContent> {

    const getImgurGalleryResponse: ApiGetGalleryResponse = require('./data.json');

    const list = getImgurGalleryResponse.data.items.filter(((item, i) => i < 30)).map(item => {
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
            },
            isLiked: false,
            isDeleted: false
        } : null;
    }).filter((item,i) => item !== null);

    return list;
}
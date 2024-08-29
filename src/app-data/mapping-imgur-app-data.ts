import { ApiGetGalleryResponse } from '../imgur/types-image';
import { PostContent } from './types';
import getImgurGallery from '../imgur/get-gallery';


// getImgurGallery() '

export default function getImages(): Array<PostContent> {

    const getImgurGalleryResponse: ApiGetGalleryResponse = require('./data.json');

    let list: Array<PostContent> = [];

    getImgurGalleryResponse.data.items
        .filter(item => item.images && item.images.length)
        .slice(0, 50).forEach(item => {
            const img = item.images?.find(img => ['image/jpeg', 'image/png'].includes(img.type));
            if (img) {
                list.push({
                    id: item.id,
                    title: item.title,
                    img: {
                        id: img.id,
                        type: img.type,
                        link: img.link,
                        width: img.width,
                        height: img.height,
                    },
                    isLiked: false,
                    isDeleted: false
                });
            }
            return null;
        });

    return list;
}
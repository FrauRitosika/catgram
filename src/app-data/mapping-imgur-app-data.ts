import { ApiGetGalleryResponse } from '../imgur/types-image';
import { PostContent } from './types';
import { fetchData } from '../imgur/get-gallery';


export default async function getImages(): Promise<Array<PostContent>> {

    const getImgurGalleryResponse: ApiGetGalleryResponse | null = await fetchData();

    console.log(getImgurGalleryResponse);

    let list: Array<PostContent> = [];

    if (!!getImgurGalleryResponse?.data) {
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
    } else { return [] }
}
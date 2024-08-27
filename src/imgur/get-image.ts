const token: string = '765e609641f09058ad8839329d36c207ccf280a5';

interface RequestParams {
    url: string,
    headers: {
        'Content-Type': string;
        'Authorization': string;
    };
    query: {
        client_id: string;
    };
    address: {
        tag: string;
        sortType: string;
        page: number;
    };
}

interface ImageResponse {
    id: string;
    title: string | null;
    description: string | null;
    datetime: number;
    type: string;
    animated: boolean;
    width: number;
    height: number;
    size: number;
    link: string;
}

interface ItemsResponse {
    id: string;
    title: string;
    description: string | null;
    datetime: number;
    cover_width: number;
    cover_height: number;
    link: string;
    images: ImageResponse[];
}

interface DataResponse {
    name: string;
    display_name: string;
    items: ItemsResponse[];
}

interface ApiGetImageResponse {
    data: DataResponse;
    success: boolean;
    status: number;
}

const params: RequestParams = {
    url: 'https://api.imgur.com/3/gallery/t/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + token
    },
    query: {
        client_id: '02f219827258953'
    },

    address: {
        tag: 'cutestcat',
        sortType: 'top',
        page: 1
    }
};

async function getImgurGallery(params: RequestParams) {

    const url: string = `${params.url}${params.address.tag}/${params.address.sortType}/all/${params.address.page}`;
    const queryParams: URLSearchParams = new URLSearchParams(params.query);

    const result: ApiGetImageResponse =  await fetch(`${url}?${queryParams}`, {
        method: 'GET',
        headers: params.headers
    })
        .then(successResponse => {
            return (successResponse.status === 200 ? successResponse.json() : null);
        },
            failResponse => {
                return null;
            });

    return result;
}

const imgurGalleryResponse = getImgurGallery(params);

export { imgurGalleryResponse, ApiGetImageResponse, DataResponse, ItemsResponse, ImageResponse}


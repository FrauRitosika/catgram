let token = '765e609641f09058ad8839329d36c207ccf280a5';

const params = {
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


export { params };
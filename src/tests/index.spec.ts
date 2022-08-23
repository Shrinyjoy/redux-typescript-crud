const axios = require('./axiosConfig');
// const getpostId = require('./index');

jest.mock('./axiosConfig', () => {
    return {
        baseURL: 'https://jsonplaceholder.typicode.com/posts',
        request: jest.fn().mockResolvedValue({
            data: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                  },
                  {
                    "userId": 1,
                    "id": 2,
                    "title": "qui est esse",
                    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                  },
                  {
                    "userId": 1,
                    "id": 3,
                    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                  }
            ]
        }),
    }
});

describe('test getpostId', () => {
    afterEach(() => jest.resetAllMocks());

    it('fetches title by user id', async () => {
        const post = await getpostId(3);
        expect(axios.request).toHaveBeenCalled();
        expect(axios.request).toHaveBeenCalledWith({ method: 'get', url: '/3/posts?_limit=3' });
        expect(post.length).toEqual(3);
        expect(post[0].userId).toEqual(3)
    });
});
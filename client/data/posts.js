import { USERS } from "./users";

export const POSTS = [
    {
        imageURL: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Having a lot of fun here. I went to the gym and did a bunch of pull. Can you see my back muscle pop? They use to never do that before.',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'theDude',
                comment: 'Wow! This build looks fire. Super excited about it.'
            },
            {
                user: 'AmazingGrace',
                comment: 'Its getting late in here.'
            },
        ]
    },
    {
        imageURL: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        user: USERS[3].user,
        likes: 9688,
        caption: 'New Start to A New Day.',
        profile_picture: USERS[3].image,
        comments: [
            {
                user: 'SuperMan',
                comment: 'Keep up the work.'
            },
            {
                user: 'Wonderwoman',
                comment: 'Stay the course.'
            },
        ]
    },
]
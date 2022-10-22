export const userMock = {
    id: 2,
    username: 'User',
    role: 'user',
    email: 'user@user.com',
    password: 'userpassword',
};

export const wrongMock = {
    email: 'user@user.com',
    password: 'wrong',
}

export const correctMock = {
    email: 'user@user.com',
    password: 'correct',
}

export const noPasswordMock = {
    email: 'user@user.com'
}

export const noEmailMock = {
    password: 'correct'
}
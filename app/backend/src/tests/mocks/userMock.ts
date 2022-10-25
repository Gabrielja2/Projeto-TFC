export const userMock = {
    id: 2,
    username: 'User',
    role: 'user',
    email: 'user@user.com',
    password: 'secret_user',
};

export const wrongPasswordMock = {
    email: 'user@user.com',
    password: 'wrong',
}

export const wrongEmailMock = {
    email: 'user@user.om',
    password: 'secret_user',
}

export const correctMock = {
    email: 'user@user.com',
    password: 'secret_user',
}

export const noPasswordMock = {
    email: 'user@user.com'
}

export const noEmailMock = {
    password: 'correct'
}

export const token = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoyLCJlbWFpbCI6InVzZXJAdXNlci5jb20iLCJ1c2VybmFtZSI6IlVzZXIiLCJwYXNzd29yZCI6IiQyYSQwOCRZOEFiaThqWHZzWHlxbS5ybXAwQi51UUJBNXFVejdUNkdobGcvQ3ZWci9nTHhZajVVQVpWTyIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTY2NjY1NTk4NywiZXhwIjoxNjY3OTUxOTg3fQ.fR0fjVuoeDIaYXRujGsAp2sMjtjYKijrpcA1seeuFco'
}
const link = (url) => {
    location.href = url;
}

const errorsList = [
    {
        'id': '404',
        'name': 'Page not found!',
        'desc': 'It looks like the page you are accessing does not exist.',
        'backbutton': 'Back to home',
        'buttonredirect': './',
    },
    {
        'id': '1412',
        'name': 'Page has been closed!',
        'desc': 'It looks like the page you are currently trying to browse has closed. It is possible that it is being worked on or has been permanently disabled.',
        'backbutton': 'Back to home',
        'buttonredirect': './',
    },
];
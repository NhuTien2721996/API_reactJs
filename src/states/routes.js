import React from 'react';
import HomePage from '../components/homePage'
import NewsPage from "../components/Page/NewsPage";
import Contact from "../components/Page/contact/contact";


const routes = [
    {
        path: '/',
        exact: true,
        name: 'Trang chủ',
        main: () => <HomePage />,
    },
    {
        path: '/a',
        exact: true,
        name: 'Giới thiệu',
        main: () => <HomePage />,
    },
    {
        path: '/ab',
        exact: true,
        name: 'Lĩnh vực',
        main: () => <HomePage />,
    },
    {
        path: '/menu3',
        exact: false,
        name: 'Dự án',
        main: () => <HomePage />,
        // childs: [
        //     {
        //         path: 'ab',
        //         name: 'Dropdown menu 1',
        //         main: ()=><HomePage/>
        //     },
        //     {
        //         path: 'a',
        //         name: 'Dropdown menu 1',
        //         main: ()=><HomePage/>
        //     },
        //     {
        //         path: 'ab',
        //         name: 'Dropdown menu 1',
        //         main: ()=><HomePage/>
        //     },
        //     {
        //         path: 'abc',
        //         name: 'Dropdown menu 1',
        //         main: ()=><HomePage/>
        //     }
        // ]
    },
    {
        path: '/news',
        exact: true,
        name: 'Tin tức',
        main: () => <NewsPage />,
    },
    {
        path: '/menu5',
        exact: false,
        name: 'Tuyển dụng',
        main: () => <HomePage />,
    },
    {
        path: '/contact',
        exact: false,
        name: 'Liên hệ',
        main: () => <HomePage />,
    }
];
export default routes;

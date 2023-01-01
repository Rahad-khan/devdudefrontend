import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firstUpload, lastUpload } from '../../Redux/actionCreators/blogActionCreator';
import { loadBlogData } from '../../Redux/thunk/blogs/blogThunk';
import Blog from './Blog';

const Home = () => {
    const blogs = useSelector(state => state.blogs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBlogData())
    }, [dispatch]);

    const handleLastUpload = () => {
        dispatch(lastUpload())
    }
    const handleFirstUpload = () => {
        dispatch(firstUpload())
    }

    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex justify-end items-center pt-3'>
                <div className="flex justify-center">
                    <div>
                        <div className="dropdown relative">
                            <a
                                className=" dropdown-toggle px-6 py-2.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                                href="!#"
                                type="button"
                                id="dropdownMenuButton2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Sort By
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="caret-down"
                                    className="w-2 ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                    ></path>
                                </svg>
                            </a>
                            <ul
                                className=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                                aria-labelledby="dropdownMenuButton2"
                            >
                                <li>
                                    <button
                                        className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        onClick={handleLastUpload}
                                    >Last Upload </button>
                                </li>
                                <li>
                                    <button
                                        onClick={handleFirstUpload}
                                        className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                    >First Upload </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Home;

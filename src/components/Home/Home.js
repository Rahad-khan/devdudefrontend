import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToHistory, firstUpload, lastUpload } from '../../Redux/actionCreators/blogActionCreator';
import { loadBlogData } from '../../Redux/thunk/blogs/blogThunk';
import Blog from './Blog';
import BlogModal from './BlogModal';

const Home = () => {
    const blogs = useSelector(state => state.blogState.blogs);


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

    const [isModalOpen, setIsModalOpen] = useState(false);

    if (isModalOpen) {
        dispatch(addToHistory(isModalOpen))
    }

    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex justify-end'>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="btn m-1 btn-sm">Sort By
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
                        </svg></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <button
                                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog} setIsModalOpen={setIsModalOpen} />)
                }
            </div>
            {isModalOpen && <BlogModal blog={isModalOpen} />}
        </div>
    );
};

export default Home;

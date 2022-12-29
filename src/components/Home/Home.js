import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBlogData } from '../../Redux/thunk/blogs/blogThunk';
import Blog from './Blog';

const Home = () => {
    const blogs = useSelector(state => state.blogs)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBlogData())
    }, [dispatch]);

    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8'>
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog} />)
            }
        </div>
    );
};

export default Home;

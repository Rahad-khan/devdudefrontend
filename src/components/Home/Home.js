import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Home = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blog.json")
            .then((res) => res.json())
            .then(data => setBlogs(data))

    }, [])
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8'>
            {
                blogs.length && blogs.map(blog => <Blog key={blog._id} blog={blog} />)
            }
        </div>
    );
};

export default Home;

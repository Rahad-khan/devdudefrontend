import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBlogThunk, loadBlogData } from '../../Redux/thunk/blogs/blogThunk';

const BlogList = () => {
    const { blogs } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            dispatch(loadBlogData())
        }
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteBlogThunk(id))
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center">
                            <thead className=''>
                                <tr className='border-b bg-green-100 border-green-200 rounded-lg'>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                        Title
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                        Author
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                        Views
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    blogs.map(blog => <tr key={blog._id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.title}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {blog.author}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {blog.views}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap space-x-2">
                                            <Link to={`updateBlog/${blog._id}`}>
                                                <button type="button" className="inline-block px-4 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                                            </Link>

                                            <button onClick={() => handleDelete(blog._id)} type="button" className="inline-block px-4 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>

                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogList;

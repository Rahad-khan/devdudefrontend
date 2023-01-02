import React from 'react';

const Blog = ({ blog, setIsModalOpen }) => {
    const { title, description, author, tags } = blog;

    return (
        <label onClick={() => setIsModalOpen(blog)} htmlFor="blogModal" className="flex justify-center cursor-pointer">
            <div className="rounded-lg shadow-lg bg-white max-w-sm relative">
                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    <p className='font-semibold py-2'>Author:{author}</p>
                    <p className="text-gray-700 text-base mb-4">
                        {description.slice(0, 100)}...
                    </p>
                </div>
                <div className='absolute bottom-3 right-3'>

                    {/* The button to open modal */}
                    < label onClick={() => setIsModalOpen(blog)} htmlFor="blogModal" className="btn btn-sm" > Read More </ label>
                </div>
            </div>
        </label>
    );
};

export default Blog;

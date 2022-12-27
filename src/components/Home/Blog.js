import React from 'react';

const Blog = ({ blog }) => {
    const { title, description, author, tags, views } = blog;
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    <p className='font-semibold py-2'>Author:{author}</p>
                    <p className="text-gray-700 text-base mb-4">
                        {description.slice(0, 100)}...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;

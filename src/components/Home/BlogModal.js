import React from 'react';

const BlogModal = ({ blog }) => {
    const { title, description, author, tags, createdAt, image, views } = blog;
    return (
        <>
            < input type="checkbox" id="blogModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box relative">
                    <label htmlFor="blogModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p><small className='font-semibold'>Author: {author}</small></p>
                    <div className=" mt-2">
                        <hr />
                    </div>
                    <img src={image} alt="" />
                    <p className="py-4">{description}</p>
                    <div className="card-actions">
                        <p>
                            Related to:
                        </p>
                        {
                            tags && tags.map((t, index) => <div key={index} className="badge ">{t}</div>)
                        }
                    </div>
                    <p><small>Posted at : {createdAt}</small></p>
                    <p className='flex items-center'>Views :{views}</p>
                    <div className="modal-action">
                        <label htmlFor="blogModal" className="btn">Close</label>
                    </div>
                </div>
            </div >
        </>
    );
};

export default BlogModal;

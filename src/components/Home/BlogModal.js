import React from 'react';

const BlogModal = ({ blog }) => {
    const { title, description, author, tags } = blog;
    return (
        <>
            < input type="checkbox" id="blogModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className="divider"></div>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="blogModal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogModal;

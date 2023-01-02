import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BlogModal from './Home/BlogModal';

const ReadingHistory = () => {

    const { history } = useSelector(state => state.historyState);

    const [isModalOpen, setIsModalOpen] = useState(null);




    return (
        <div className='lg: w-5/6 mx-auto lg:mt-8'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>History</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map(h => <tr key={h._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={h.image} alt={h.title} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{h.title}</div>
                                            <div className="text-sm opacity-50">{h.author}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    < label onClick={() => setIsModalOpen(h)} htmlFor="blogModal" className="btn btn-sm" > Read Again </ label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                isModalOpen && <BlogModal blog={isModalOpen} />
            }
        </div>
    );
};

export default ReadingHistory;

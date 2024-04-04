import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftSideContent = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='flex justify-between items-center md:block'>
            <h3 className='font-bold py-4 px-2 text-xl'>Total categories: {categories.length}</h3>
            <div className='hidden md:block'>
                {
                    categories.map(category => <div
                        className='block p-4 text-xl hover:bg-base-300 rounded-xl'
                        key={category.id}
                    >{category.name}</div>)
                }
            </div>
            <div className='block md:hidden'>
                <select className='bg-base-200 p-4' name="short-list" id="short-list">
                    <option value="volvo" hidden>News by category</option>
                    {
                        categories.map(category => <option
                            className=''
                            key={category.id}
                        >{category.name}</option>)
                    }
                </select>
            </div>
        </div>
    );
};

export default LeftSideContent;
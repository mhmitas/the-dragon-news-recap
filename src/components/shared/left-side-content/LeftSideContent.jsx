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
        <div>
            <h3 className='font-bold py-4 px-2 text-xl'>All categories {categories.length}</h3>
            <div className='ml-4 menu'>
                {
                    categories.map(category => <NavLink
                        className='block p-4 text-xl'
                        key={category.id}
                        to={`category/${category.id}`}
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideContent;
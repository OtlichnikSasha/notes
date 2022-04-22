import React from 'react';
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            <div className="not_found_heading">
                Упс! <br/>
                Такой страницы не найдено!
            </div>
            <Link to="/index" className="not_found_href">Перейти на главную</Link>
        </div>
    );
};


import React, {FC} from 'react';
import {Link} from "react-router-dom";

export const CreateNoteBtn: FC = () => {
    return (
        <Link className="create_note_btn" to="/createNote">
            <span>+</span>
        </Link>
    );
};


import React, {FC} from 'react';

interface EmptyProps {
    loading: boolean
}

export const Empty: FC<EmptyProps> = ({loading}) => {
    return (
        <>
            {
                !loading ?
                    <div className="empty_place">
                        <span className="fa fa-book-open"/>
                        <div className="empty_heading">
                            Нет заметок
                        </div>
                    </div>
                    : <></>
            }
        </>

    );
};


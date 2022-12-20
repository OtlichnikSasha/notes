import {
    Route,
    Routes,
} from 'react-router-dom';
import Index from "./pages/Index";
import Note from "./pages/Note";
import CreateNote from "./pages/CreateNote";
import NotFound from "./pages/NotFound";

export const useRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='index' element={<Index/>}/>
            <Route path='note/:id' element={<Note/>}/>
            <Route path='createNote' element={<CreateNote/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};


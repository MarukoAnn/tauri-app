import { useNavigate } from 'react-router-dom';

const useUtilsHooks = () => {
    const navigation = useNavigate();
    return navigation;
}

export default useUtilsHooks;
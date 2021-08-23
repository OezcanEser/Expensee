import axios from 'axios';
import { errorResponseMessage } from '../../utils/errorResponseMessage';
import { GET_TOTAL_COSTS, FAILURE } from '../actionTypes';

export const getTotalCosts = () => async (dispatch) => {
  try {
    let { data } = await axios.get('/balance/summary');
    dispatch({
      type: GET_TOTAL_COSTS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: FAILURE, payload: errorResponseMessage(error) });
  }
};

// export function useTotalCosts() {
//     const [totalCosts, setTotalCosts] = useState(null);
//     const [errorExists, setErrorExists] = useState(null);

//     useEffect(() => {
//       async function getTotalCosts() {
//         try {
//           let { data } = await axios.get('/balance/summary');
//           setTotalCosts(data.data);
//         } catch (error) {
//           setErrorExists(errorResponseMessage(error));
//         }
//       }
//       getTotalCosts();
//     }, []);

//     return [totalCosts, errorExists];
//   }

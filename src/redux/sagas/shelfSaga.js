import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchShelf(action) {
    try {
    // passes the username and password from the payload to the server
        const response = yield axios.get('/api/shelf');
        yield put ({type: 'SET_SHELF', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchShelf', error);
    }
}

function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
}

export default shelfSaga;

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

function* deleteShelf(action) {
    try {
        //passes id from the payload to the server
        yield axios.delete(`/api/shelf/${action.payload}`);
        yield put( {type: 'FETCH_SHELF'});
    }
    catch(error){
        console.log('Error in deleteShelf', error);
    }
}

function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
  yield takeLatest('DELETE_SHELF', deleteShelf);
}

export default shelfSaga;

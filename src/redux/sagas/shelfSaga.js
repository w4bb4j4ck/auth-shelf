import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "SET_SHELF" actions
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
function* addBook(action){
    try{
        const response = yield axios.post('/api/shelf', action.payload)
        console.log(response)
        console.log(action.payload)
        yield put ({type: 'FETCH_SHELF'});
        yield put ({type: 'FETCH_PERSONAL_SHELF', payload: action.payload.user_id});
    }
    catch(error){
        console.log('error in addBook', error)
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
function* fetchPersonalShelf(action) {
    try{
        const response = yield axios.get(`/api/shelf/${action.payload}`);
        yield put ({type: 'SET_PERSONAL_SHELF', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchPersonalShelf', error)
    }
    
}

function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
  yield takeLatest('DELETE_SHELF', deleteShelf);
  yield takeLatest('ADD_BOOK', addBook)
  yield takeLatest('FETCH_PERSONAL_SHELF', fetchPersonalShelf)
}

export default shelfSaga;

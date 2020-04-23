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
        yield put ({type: 'FETCH_SHELF'});
    }
    catch(error){
        console.log('error in addBook', error)
    }
}

function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
  yield takeLatest('ADD_BOOK', addBook)
}

export default shelfSaga;

import { fork, call, all, put, takeLatest } from '@redux-saga/core/effects';
import { getFlickr, getYoutube, getMembers } from './api';

// flickr
export function* returnFlickr(action) {
	const response = yield call(getFlickr, action.Opt);
	yield put({ type: 'FLICKR_SUCCESS', payload: response.data.photos.photo });
}

export function* callFlickr() {
	yield takeLatest('FLICKR_START', returnFlickr);
}

// youtube
export function* returnYoutube() {
	const response = yield call(getYoutube);
	yield put({ type: 'YOUTUBE_SUCCESS', payload: response.data.items });
}

export function* callYoutube() {
	yield takeLatest('YOUTUBE_START', returnYoutube);
}

// members
export function* returnMembers() {
	const response = yield call(getMembers);
	yield put({ type: 'MEMBERS_SUCCESS', payload: response.data.members });
}

export function* callMembers() {
	yield takeLatest('MEMBERS_START', returnMembers);
}

// rootsaga
export default function* rootSaga() {
	yield all([fork(callFlickr)]);
	yield all([fork(callYoutube)]);
	yield all([fork(callMembers)]);
}

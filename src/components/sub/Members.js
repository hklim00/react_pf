import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Members() {
	const history = useHistory();

	// 입력값 담을 초기 객체 생성
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		gender: null,
		interests: null,
		edu: '',
		comments: '',
	};

	const [Val, setVal] = useState(initVal);

	// 인증조건 실패 시 출력될 에러메시지가 항목별로 담길 state추가
	const [Err, setErr] = useState({});

	const [Submit, setSubmit] = useState(false);

	//인증처리 함수
	const check = (value) => {
		const errs = {};

		// 인증처리 정규표현식
		const eng = /[a-zA-z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+\]]/;

		// userid
		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요.';
		}

		// email
		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = '이메일주소는 8글자 이상 @를 포함하세요';
		}

		// password
		if (
			value.pwd1.length < 6 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 =
				'비밀번호는 6글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요';
		}

		// password2, 같지 않거나 값이 없거나
		if (value.pwd1 !== value.pwd2 || !value.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요';
		}

		// gender
		if (!value.gender) {
			errs.gender = '성별을 선택하세요.';
		}

		// check
		if (!value.interests) {
			errs.interests = '관심사를 하나 이상 선택하세요';
		}

		// select
		if (value.edu === '') {
			errs.edu = '최종학력을 선택하세요';
		}

		// comments
		if (value.comments.length < 10) {
			errs.comments = '남기는 말을 10글자 이상 입력하세요';
		}

		return errs;
	};

	//submit이벤트 발생시 실행할 함수
	const handleSubmit = (e) => {
		//일단은 이벤트의 기본기능을 막아서 서버전송 방지
		e.preventDefault();

		//check함수에 인수로 Val값을 넣어서 인증검사후
		//반환된 에러객체값을 Err 스테이트에 옮겨담음
		setErr(check(Val));
	};

	// 현재 입력되고 있는 input요소의 name, value값을 비구조화할당으로 받아서 객체에 []를 이용해 키값으로 활용
	const handleChange = (e) => {
		const { name, value } = e.target; // e.target.name , e.target.value

		// es5 객체에서 키값을 변수로 지정할 수 없음
		// setVal({...Val,'userid':value});

		// es6 객체에서 키값을 변수로 치환하고자 할때 키에 들어갈 변수를 대괄호로 감싸줌
		setVal({ ...Val, [name]: value }); // { ...Val, userid: e.target.value }
	};

	// radio 인풋 전용 함수
	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
	};

	// check 인풋 전용 함수
	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');

		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});

		setVal({ ...Val, [name]: isCheck });
	};

	// select
	const handleSelect = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	useEffect(() => {
		//전송 클릭시 에러메세지를 가지고 값이 Err스테이트 객체에 하나도 없으면 인증통과

		//Objec.keys(확인할 객체) : 특정 객체의 키값을 배열로 반환해주는 객체전용 내장함수
		const len = Object.keys(Err).length;

		//에러메세지가 하나도 없고 Submit버튼을 클릭시 두개 조건을 모두 만족해야지 인증성공처리
		if (len === 0 && Submit) {
			alert('회원가입이 완료되었습니다. 메인페이지로 이동합니다.');
			history.push('/');
		}
	}, [Err]);

	return (
		<Layout name={'Members'}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>회원가입 폼 양식</legend>
					<table>
						<caption>회원가입 정보 입력</caption>
						<tbody>
							{/* id */}
							<tr>
								<th scope='row'>
									<label htmlFor='userid'>USER ID</label>
								</th>
								<td>
									<input
										type='text'
										placeholder='아이디를 입력하세요'
										name='userid'
										id='userid'
										value={Val.userid}
										onChange={handleChange}
									/>
									<span className='err'>{Err.userid}</span>
								</td>
							</tr>

							{/* password */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd1'
										id='pwd1'
										value={Val.pwd1}
										placeholder='비밀번호를 입력하세요'
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd1}</span>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>RE-PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd2'
										id='pwd2'
										value={Val.pwd2}
										placeholder='비밀번호를 재입력하세요'
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd2}</span>
								</td>
							</tr>

							{/* email */}
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-MAIL</label>
								</th>
								<td>
									<input
										type='text'
										id='email'
										name='email'
										value={Val.email}
										placeholder='이메일 주소를 입력하세요'
										onChange={handleChange}
									/>
									<span className='err'>{Err.email}</span>
								</td>
							</tr>

							{/* gender */}
							<tr>
								<th scope='row'>GENDER</th>
								<td>
									<label htmlFor='male'>MALE</label>
									<input
										type='radio'
										id='male'
										name='gender'
										onChange={handleRadio}
									/>

									<label htmlFor='female'>FEMALE</label>
									<input
										type='radio'
										id='female'
										name='gender'
										onChange={handleRadio}
									/>
									<span className='err'>{Err.gender}</span>
								</td>
							</tr>

							{/* interests */}
							<tr>
								<th scope='row'>INTERESTS</th>
								<td>
									<label htmlFor='sports'>Sports</label>
									<input
										type='checkbox'
										id='sports'
										name='interests'
										onChange={handleCheck}
									/>

									<label htmlFor='music'>Music</label>
									<input
										type='checkbox'
										id='music'
										name='interests'
										onChange={handleCheck}
									/>

									<label htmlFor='game'>Game</label>
									<input
										type='checkbox'
										id='game'
										name='interests'
										onChange={handleCheck}
									/>
									<span className='err'>{Err.interests}</span>
								</td>
							</tr>

							{/* edu */}
							<tr>
								<th scope='row'>
									<label htmlFor='edu'>EDUCATION</label>
								</th>
								<td>
									<select name='edu' id='edu' onChange={handleSelect}>
										<option value=''>최종 학력을 선택하세요</option>
										<option value='elementary-school'>초등학교 졸업</option>
										<option value='middle-school'>중학교 졸업</option>
										<option value='high-school'>고등학교 졸업</option>
										<option value='college'>대학교 졸업</option>
									</select>
									<span className='err'>{Err.edu}</span>
								</td>
							</tr>

							{/* comments */}
							<tr>
								<th scope='row'>
									<label htmlFor='comments'>COMMENTS</label>
								</th>
								<td>
									<textarea
										name='comments'
										id='comments'
										cols='30'
										rows='3'
										value={Val.comments}
										onChange={handleChange}
										placeholder='남기는말을 입력하세요'></textarea>
									<span className='err'>{Err.comments}</span>
								</td>
							</tr>

							{/* btnSet */}
							<tr>
								<th colSpan='2'>
									<input type='reset' value='cancel' />
									<input
										type='submit'
										value='submit'
										onClick={() => setSubmit(true)}
									/>
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}

export default Members;

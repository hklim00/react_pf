import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Members() {
	// 입력값 담을 초기 객체 생성
	const initVal = {
		userid: '',
		pwd1: '',
		pewd2: '',
		email: '',
		gender: false,
		interests: false,
		edu: false,
		comments: '',
	};

	const [Val, setVal] = useState(initVal);

	// 인증조건 실패 시 출력될 에러메시지가 항목별로 담길 state추가
	const [Err, setErr] = useState({});

	//인증처리 함수
	const check = (value) => {
		const errs = {};

		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요.';
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

	return (
		<Layout name={'Members'}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>회원가입 폼 양식</legend>
					<table>
						<caption>회원가입 정보 입력</caption>
						<tbody>
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
										placeholder='비밀번호를 입력하세요'
									/>
									<span className='err'></span>
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
										placeholder='비밀번호를 재입력하세요'
									/>
									<span className='err'></span>
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
										placeholder='이메일 주소를 입력하세요'
									/>
									<span className='err'></span>
								</td>
							</tr>

							{/* gender */}
							<tr>
								<th scope='row'>GENDER</th>
								<td>
									<label htmlFor='male'>MALE</label>
									<input type='radio' id='male' name='gender' />

									<label htmlFor='female'>FEMALE</label>
									<input type='radio' id='female' name='gender' />
									<span className='err'></span>
								</td>
							</tr>

							{/* interests */}
							<tr>
								<th scope='row'>INTERESTS</th>
								<td>
									<label htmlFor='sports'>Sports</label>
									<input type='checkbox' id='sports' name='interests' />

									<label htmlFor='music'>Music</label>
									<input type='checkbox' id='music' name='interests' />

									<label htmlFor='game'>Game</label>
									<input type='checkbox' id='game' name='interests' />
									<span className='err'></span>
								</td>
							</tr>

							{/* edu */}
							<tr>
								<th scope='row'>
									<label htmlFor='edu'>EDUCATION</label>
								</th>
								<td>
									<select name='edu' id='edu'>
										<option value=''>최종 학력을 선택하세요</option>
										<option value='elementary-school'>초등학교 졸업</option>
										<option value='middle-school'>중학교 졸업</option>
										<option value='high-school'>고등학교 졸업</option>
										<option value='college'>대학교 졸업</option>
									</select>
									<span className='err'></span>
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
										placeholder='남기는말을 입력하세요'></textarea>
									<span className='err'></span>
								</td>
							</tr>

							{/* btnSet */}
							<tr>
								<th colSpan='2'>
									<input type='reset' value='cancel' />
									<input type='submit' value='submit' />
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

import React, {FormEvent, useRef, useState} from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Wrapper from '../../components/wrapper/wrapper';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useNavigate} from 'react-router-dom';

function SignIn(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  React.useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth){
      navigate(AppRoute.Main);
    }
  });


  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current && isPasswordValid) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };
  return (
    <Wrapper>
      <div className="user-page">
        <Header additionalClass={'user-page__head'}>
          <h1 className="page-title user-page__title">Sign in</h1>
        </Header>

        <div className="sign-in user-page__content">
          <form action="" className="sign-in__form" onSubmit={handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={loginRef}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">
                  Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  onChange={() => {
                    setIsPasswordValid(false);
                    if (passwordRef.current?.value.match(/[a-z]/) && passwordRef.current?.value.match(/[0-9]/)) {
                      setIsPasswordValid(true);
                    }
                  }}
                  ref={passwordRef}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">
                  Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </Wrapper>
  );
}

export default SignIn;

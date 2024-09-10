import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import '../css/main.css';
import Reactsvg from '../img/React_logo.svg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleNavMenu = () => setIsNavMenuOpen(!isNavMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div id="header" className=" d-flex flex-column mt-sm-4 mt-1 ms-sm-4 ms-2 me-2 me-sm-0">
        <div>
            <div className='dash_f ms-md-4 ms-0'>
                <h1 className="sitename mb-3">Portfolio</h1>
            </div>
            <div className='d-flex flex-sm-row flex-column'>
                <div className="profile-img col-sm-6">
                    <img src="/img/me.jpg" alt="" className="img-fluid" />
                    <div className='info mt-3 pe-4 pe-lg-0'>
                        <p className='d-flex flex-column info_font text-sm-start text-center'>영국 어학연수와 MD 업무를 통해 소통 능력과 실무 역량을 키웠으며, 
                            <span>프론트엔드 개발에 대한 흥미를 넓혔습니다.</span>
                            <span>사용자 중심의 웹 경험을 제공하며 향후 프로젝트 성공에 기여하고 싶습니다. </span>
                        </p>
                    </div>
                </div>
                <div className="resume section d-flex flex-column col-sm-5">
                    <div className='hello'>
                    <h3 className='d-flex flex-column'>
                        안녕하세요.
                        <ReactTyped
                        strings={['프론트엔드 개발자', '웹 퍼블리셔']}
                        typeSpeed={70}
                        backSpeed={50}
                        loop
                        />
                        고민서입니다.
                    </h3>
                    </div>
                    <div className='personal mb-lg-5 mb-2 mt-2 text-sm-start text-center'>
                        <ul className='list-unstyled'>
                            <li>1994. 11. 12</li>
                            <li>010 - 5042 - 9412</li>
                            <li>gominseo1112@gmail.com</li>
                            <li>https://github.com/minseogo</li>
                        </ul>
                    </div>
                    <div className='skills mt-lg-5 mt-1 mb-lg-4 mb-0'>
                        <h2 className="text-sm-start text-center">What I Do</h2>
                        <div className="d-flex flex-column align-items-stretch">
                            <div className="skills-content">
                                <div className='d-flex flex-row mt-1 align-items-lg-center flex-lg-row justify-content-evenly align-items-sm-start flex-sm-column align-items-center justify-content-sm-start '>
                                    <div className='text-lg-center text-start me-lg-3 me-1'><img className='reactlogo' src={Reactsvg} alt="React svg" /></div>
                                    <div className='text-lg-center text-start me-lg-2 me-1 mt-lg-0 mt-sm-2'><img className='figmalogo' src={`${process.env.PUBLIC_URL}/img/Figma_logo.png`} alt="Figma png" /></div>
                                    <div className='text-lg-center text-start me-lg-2 me-1 mt-lg-0 mt-sm-2'><img src={`${process.env.PUBLIC_URL}/img/Cafe24_logo.png`} alt="Cafe24 png" /></div>
                                    <div className='text-lg-center text-start mt-lg-0 mt-sm-2 ms-md-0 ms-sm-1'><img src={`${process.env.PUBLIC_URL}/img/Gnuboard_logo.png`} alt="Gnuboard png" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='experience mt-lg-5 mt-2'>
                        {/* <h2>Experience</h2> */}
                        <div className="d-flex flex-lg-row flex-sm-column flex-column justify-content-sm-start justify-content-between align-items-sm-start align-items-center">
                            <div className='education text-sm-start text-center'>
                                <h3 className="resume-title text-sm-start text-center">Education</h3>
                                <div className="resume-item">
                                <h4>웹퍼블리셔(UI/UX)&프론트엔드개발</h4>
                                    <h5>2024.03 ~ 2024.09</h5>
                                </div>
                                <div className="resume-item d-flex flex-column">
                                    <h4>IH LONDON</h4>
                                    <h5 className='pb-0 mb-0'>2020.09 ~ 2020.11</h5>
                                    <h5 className='pb-2 mb-0'>2019.04 ~ 2019.07</h5>
                                    <p className='lo_font'><em>영국, 런던</em></p>
                                </div>
                                <div className="resume-item d-flex flex-column">
                                    <h4>수원과학대학교 / 공연연기과</h4>
                                    <h5>2014.03 ~ 2018.03</h5>
                                </div>
                                <div className="resume-item">
                                    <h4>목동고등학교</h4>
                                    <h5>2010.03 ~ 2013.03</h5>
                                </div>
                            </div>
                            <div className="work pt-md-0 ms-lg-5 ms-0 text-sm-start text-center">
                                <h3 className="resume-title">Work Experience</h3>
                                <div className="resume-item">
                                    <h4>온라인 MD</h4>
                                    <h5 className='pb-2 mb-0'>2023.10 ~ 2024.01</h5>
                                    <p className='lo_font'><em>웹뜰 / 대한민국, 서울</em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>온라인 마케팅, 바리스타</h4>
                                    <h5 className='pb-2 mb-0'>2022.10 ~ 2023.05</h5>
                                    <p className='lo_font'><em>Cocomelt / 영국, 런던</em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>바리스타</h4>
                                    <h5 className='pb-2 mb-0'>2022.05 ~ 2022.08</h5>
                                    <p className='lo_font'><em>Knockbox / 영국, 런던</em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>온라인MD 인턴</h4>
                                    <h5 className='pb-2 mb-0'>2021.12 ~ 2022.03</h5>
                                    <p className='lo_font'><em>Globalon / 영국, 런던</em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>온라인MD</h4>
                                    <h5 className='pb-2 mb-0'>2021.03 ~ 2021.09</h5>
                                    <p className='lo_font'><em>세븐제이스 / 대한민국, 경기도</em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;

import React, { Component } from 'react';
import MainTemplate from '../component/template/MainTemplate';

class Home extends Component {
    render() {
        return (
            <MainTemplate>
                <section>
                    <h1>홈페이지</h1>
                    <p>메인 페이지 내용</p>
                </section>
            </MainTemplate>
        )
    }
}

export default Home;
// https://velog.io/@zmin9/React-Firebase-Authentication-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%9D%B4%EB%A9%94%EC%9D%BC-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EB%A1%9C%EA%B7%B8%EC%9D%B8

import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <header>
                <h1><Link href="/">식자재마켓</Link></h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/categories">카테고리</Link>
                        </li>
                        <li>
                            <Link href="/purchases">구매 내역</Link>
                        </li>
                        <li>
                            <Link href="/sales">판매 내역</Link>
                        </li>
                    </ul>
                </nav>
                <input type="text" placeholder="검색어를 입력하세요" />
                <Link href="/signin">로그인</Link>
                <Link href="/signup">회원가입</Link>
                <Link href="/cart">장바구니</Link>
            </header>
            <main>
                <h2>홈</h2>
                <section>
                    <h3>인기 상품</h3>
                    <ul>
                        <li>
                            <Link href="/products/1">김치국.h</Link>
                        </li>
                        <li>
                            <Link href="/products/1">그림의 떡.h</Link>
                        </li>
                        <li>
                            <Link href="/products/1">김희선 토마토.h</Link>
                        </li>
                        <li>
                            <Link href="/products/1">빛 좋은 개살구.h</Link>
                        </li>
                        <li>
                            <Link href="/products/1">새발의 피.h</Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>특가 상품</h3>
                    <ul>
                        <li>
                            <Link href="/products/1">불닭 소스.cpp</Link>
                        </li>
                        <li>
                            <Link href="/products/1">사우스 웨스트 소스.tsx</Link>
                        </li>
                        <li>
                            <Link href="/products/1">틈새 소스.swift</Link>
                        </li>
                        <li>
                            <Link href="/products/1">깔루아.java</Link>
                        </li>
                        <li>
                            <Link href="/products/1">참소스.py</Link>
                        </li>
                    </ul>
                </section>
            </main>
            <footer>
                <div className="wrapper">
                    <div className="footer-logo">
                        식자재마켓
                    </div>
                    <div className="footer-address">
                        <address>서울특별시 팔달구 충렬대로 256 (부개3동)</address>
                        <p>사업자등록번호: 000-00-00000</p>
                        <p>통신판매업신고: 대덕-2023-000000</p>
                    </div>
                    <div className="footer-contact">
                        <p>고객센터</p>
                        <p><a href="tel:01-0000-0000">01-0000-0000</a></p>
                    </div>
                </div>
            </footer>
        </>
    );
}

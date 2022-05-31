import React from "react";
import { Link } from "gatsby";

function TestPage() {
  return (
    <main>
      <title>테스트</title>
      <h1>테스트 페이지 입니다.</h1>
      <Link to="/test">Test</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
}

export default TestPage;

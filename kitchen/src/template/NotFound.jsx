/* eslint react/no-danger: 0 */
import React from 'react';
import { Link } from 'bisheng/router';

export default function NotFound() {
  const handleClick = (e) => {
    e.preventDefault();
    location.replace(location.port ? '/' : '/kitchen-sink');
  };
  return (
    <div id="page-404">
      <section>
        <h1>404</h1>
        <p>你要找的页面不存在 <Link to={location.port ? '/' : '/kitchen-sink'} onClick={handleClick}>返回首页</Link></p>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: '#react-content { height: 100%; background-color: #fff }',
        }}
      />
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./pageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="container-fluid">
        <div className="page-not-found__content">
          <p>Xin lỗi! Không tìm thấy trang bạn yêu cầu.</p>
          <Link to="/">Quay lại trang chủ</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

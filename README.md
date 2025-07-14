# 🌐 XÂY DỰNG WEBSITE ĐẶT THỨC ĂN

<img width="948" height="439" alt="image" src="https://github.com/user-attachments/assets/b59e240e-15fc-4393-b00f-2a9a49ee94b7" />
<img width="943" height="279" alt="image" src="https://github.com/user-attachments/assets/f7a4f5a7-2a8d-40af-a703-f76725019077" />
<img width="949" height="261" alt="image" src="https://github.com/user-attachments/assets/5abdf92f-26a2-436c-8e32-6c9c993f9d75" />



---
<img width="949" height="396" alt="image" src="https://github.com/user-attachments/assets/6a96fa2e-e31f-4450-8101-1456adb9dfce" />
<img width="949" height="600" alt="image" src="https://github.com/user-attachments/assets/9ed72bb9-f7a1-4045-84ad-cbc77ef6e3bb" />

<img width="947" height="440" alt="image" src="https://github.com/user-attachments/assets/ae71ecdb-5b92-4d43-bd1e-04053dc35f44" />


---

**Dự án này được xây dựng bởi [Nguyễn Ngô Ngọc Vân](https://github.com/ngocvann)**

---

## 🚀 Mô Tả Dự Án

Dự án này nhằm xây dựng một website đặt thức ăn, với các chức năng nổi bật sau:

- **Đăng ký tài khoản**: Người dùng có thể dễ dàng đăng ký tài khoản mua/bán thức ăn.
- **Gợi ý các quán ăn nổi bật**: Người dùng có thể xem tổng quan các quán ăn ở trang chủ, khi click chọn quán ăn thì sẽ dẫn đến trang xem chi tiết quán và thực đơn của quán
- **Đặt món ăn**: Khách hàng có đặt giao hàng với số lượng món và tùy chỉnh món tự chọn
- **Thêm quán ăn vào mục yêu thích**: Khách hàng có thể thêm quán ăn vào danh mục yêu thích
- **Tìm kiếm món ăn**: Người dùng có thể tìm kiếm món ăn theo nhiều tiêu chí như tên quán, tên sản phẩm, v.v.
- **Đăng tải thực đơn, khuyến mãi và sự kiện**: Người đăng ký tài khoản với vai trò người bán có thể đăng tải các món ăn của nhà hàng, tùy chọn khẩu vị cho khách hàng, phân loại theo danh mục, có thể thêm các khuyến mãi và sự kiện cho quán.
- **Quản lý đơn hàng đã đặt**: Người dùng có thể xem chi tiết đơn hàng, trạng thái và hủy nếu cần. Với người bán thì có thể quản lý các đơn hàng của nhà hàng, cập nhật trạng thái đơn hang.

---

## 💻 Các Công Nghệ Sử Dụng

- **Frontend**: React, Tailwind CSS, Material UI, Axios
- **Backend**: Java (Spring Boot), Spring Security, Spring Data JPA, Spring Start Email
- **Database**: MySQL
- **Version Control**: Git, GitHub

---

## 📦 Hướng Dẫn Cài Đặt Dự Án

### 1️⃣ Cài đặt
Clone dự án và cài thư viện:
```bash
git clone https://github.com/ngocvann/orderfood_ui.git
cd orderfood_ui
npm install
```
Clone backend về máy:
```bash
git clone https://github.com/ngocvann/OrderFood-website.git
```

### Cấu Hình Cơ Sở Dữ Liệu 💾
1. **Mở MySQL và tạo cơ sở dữ liệu với tên phù hợp, ví dụ: order_food.**
2. **Cập nhật file application.properties trong thư mục src/main/resources với thông tin kết nối MySQL của bạn:**
```bash
spring.datasource.url=jdbc:mysql://${DB_HOST:localhost}:${DB_PORT:3306}/${DB_NAME:order_food}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=${DB_USERNAME:<nhập username>}
spring.datasource.password=${DB_PASSWORD:<nhập mật khẩu>}
```

### 2️⃣ Chạy ứng dụng
#### Khởi chạy server phát triển:
Đầu tiên cần chạy backend.
Sau đó sao chép mã nguồn từ GitHub bằng lệnh sau:
```bash
npm start
```
Mở trình duyệt tại http://localhost:3000

## 📝 Đánh Giá và Phản Hồi

Mình rất mong nhận được ý kiến đóng góp của bạn để cải thiện sản phẩm. Nếu bạn có bất kỳ ý tưởng, phản hồi hoặc phát hiện lỗi nào, hãy liên hệ hoặc gửi issue trên GitHub.

Nếu có bất kỳ thắc mắc nào trong quá trình cài đặt, vui lòng tham khảo tài liệu hoặc liên hệ qua các kênh hỗ trợ được liệt kê trong repository này. 🎉


# مدیر وظیفه

این یک برنامه مدیریت وظایف است که با .NET Core برای بک‌اند و React.js برای فرانت‌اند ساخته شده است.

## ویژگی‌ها

- ایجاد، خواندن، به‌روزرسانی و حذف وظایف
- طراحی واکنش‌گرا با Tailwind CSS
- مدیریت خطاهای API با Axios interceptors
- پیکربندی سیاست CORS

## فناوری‌های استفاده شده

- **بک‌اند**: .NET Core، Entity Framework Core
- **فرانت‌اند**: React.js، Axios، Tailwind CSS
- **پایگاه داده**: SQL Server

## شروع به کار

### پیش‌نیازها

- [.NET Core SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### نصب

1. مخزن را کلون کنید:

   ```sh
   git clone https://github.com/your-username/task_manager.git
   cd task_manager
   ```

2. بک‌اند را تنظیم کنید:

   ```sh
   cd server
   dotnet restore
   dotnet ef database update
   dotnet run
   ```

3. فرانت‌اند را تنظیم کنید:
   ```sh
   cd ../client
   npm install
   npm start
   ```

### پیکربندی

- رشته اتصال را در `appsettings.json` برای بک‌اند به‌روزرسانی کنید:

  ```json
  "ConnectionStrings": {
    "DefaultConnection": "Server=your_server;Database=your_database;User Id=your_user;Password=your_password;"
  }
  ```

- آدرس پایه را در `client/src/services/api.js` برای فرانت‌اند به‌روزرسانی کنید:
  ```javascript
  const API = axios.create({
    baseURL: "http://localhost:5000", // آدرس بک‌اند خود را جایگزین کنید
  });
  ```

## استفاده

- مرورگر خود را باز کنید و به `http://localhost:3000` بروید تا از برنامه استفاده کنید.
- از فیلد ورودی برای افزودن وظایف جدید استفاده کنید.
- برای ویرایش یک وظیفه روی آیکون ویرایش کلیک کنید.
- برای حذف یک وظیفه روی آیکون حذف کلیک کنید.

## مشارکت

مشارکت‌ها خوش‌آمد می‌باشند! لطفاً مخزن را فورک کنید و یک pull request ایجاد کنید.

## مجوز

این پروژه تحت مجوز MIT منتشر شده است. برای جزئیات به فایل [LICENSE](LICENSE) مراجعه کنید.

## تقدیر و تشکر

- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

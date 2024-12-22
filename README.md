# Task Manager

[Persian Version (نسخه فارسی)](docs/README[FA].md)

This is a task management application built with .NET Core for the backend and React.js for the frontend.

## Features

- Create, read, update, and delete tasks
- Responsive design with Tailwind CSS
- API error handling with Axios interceptors
- CORS policy configuration

## Technologies Used

- **Backend**: .NET Core, Entity Framework Core
- **Frontend**: React.js, Axios, Tailwind CSS
- **Database**: SQL Server

## Getting Started

### Prerequisites

- [.NET Core SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/task_manager.git
   cd task_manager
   ```

2. Set up the backend:

   ```sh
   cd server
   dotnet restore
   dotnet ef database update
   dotnet run
   ```

3. Set up the frontend:
   ```sh
   cd ../client
   npm install
   npm start
   ```

### Configuration

- Update the connection string in `appsettings.json` for the backend:

  ```json
  "ConnectionStrings": {
    "DefaultConnection": "Server=your_server;Database=your_database;User Id=your_user;Password=your_password;"
  }
  ```

- Update the base URL in `client/src/services/api.js` for the frontend:
  ```javascript
  const API = axios.create({
    baseURL: "http://localhost:5000", // Replace with your backend URL
  });
  ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to use the application.
- Use the input field to add new tasks.
- Click the edit icon to edit a task.
- Click the delete icon to delete a task.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

# Password Manager

A secure and efficient password manager built with React and Vite, utilizing MongoDB for data storage. This project enables users to store passwords along with usernames and website URLs, ensuring accessibility and security.

## Features
- **Secure Storage**: Uses MongoDB to securely store passwords.
- **Unique ID Generation**: Utilizes `uuid` to generate unique IDs for password entries.
- **Intuitive UI**: Designed with `LordIcons` for a visually appealing interface.
- **Background Styling**: Integrated `BG.IBELICK` for an aesthetic background.
- **Clipboard Copy Animation**: Uses `Toast` for notifying users when a password is copied to the clipboard.

## Tech Stack
- **Frontend**: React, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Dependencies**:
  - `LordIcons` (icons)
  - `BG.IBELICK` (background color)
  - `Toastify` (copy animation notifications)
  - `uuid` (unique ID generation)
  - `mongodb` (database interaction)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 16)
- MongoDB (local or cloud-based instance)

### Steps to Run Locally
1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/password-manager.git
   cd password-manager
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Set up environment variables**:
   Create a `.env` file in the root directory and configure your MongoDB connection:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. **Run the backend server**:
   ```sh
   npm run server
   ```
5. **Run the frontend**:
   ```sh
   npm run dev
   ```
6. Open `http://localhost:5173` in your browser.

## Contributing
We welcome contributions! Follow these steps to contribute:
1. **Fork the repository**
2. **Create a new branch**
   ```sh
   git checkout -b feature-name
   ```
3. **Make your changes**
4. **Commit and push your changes**
   ```sh
   git commit -m "Added a new feature"
   git push origin feature-name
   ```
5. **Open a Pull Request**

## License
This project is licensed under the MIT License.

## Contact
For any issues or suggestions, feel free to create an issue or reach out!

Happy coding! 🚀


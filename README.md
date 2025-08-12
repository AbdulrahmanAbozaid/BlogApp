# BlogApp 📝

A full-featured blog application with comprehensive user management, content creation, and administrative capabilities. Built as the graduation project for the Google Developer Student Clubs (GDSC) Node.js specialization program.

## 🌟 Features

### User Management
- **User Registration & Authentication**: Secure signup and login system
- **Role-Based Authorization**: Different access levels (Admin, Author, Reader)
- **Profile Management**: User profile customization and settings
- **Password Security**: Encrypted password storage with bcrypt

### Content Management
- **Rich Text Editor**: Create and edit blog posts with formatting options
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **Category System**: Organize posts by categories and tags
- **Draft & Publish**: Save drafts and publish when ready
- **Featured Posts**: Highlight important content

### Administrative Features
- **Admin Dashboard**: Comprehensive management interface
- **User Management**: Admin can manage user accounts and permissions
- **Content Moderation**: Review and approve posts before publication
- **Analytics**: Basic post engagement and user statistics

### User Experience
- **Responsive Design**: Optimized for all devices
- **Search Functionality**: Find posts by title, content, or tags
- **Comments System**: Interactive comment threads (if implemented)
- **Social Sharing**: Share posts on social media platforms

## 🚀 Live Demo

*Add your live demo link here when deployed*

## 🛠️ Technology Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcrypt**: Password hashing and security

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with responsive design
- **JavaScript**: Interactive frontend functionality
- **Bootstrap/Sass**: UI framework and preprocessing

### Development Tools
- **Jest**: Testing framework
- **ESLint**: Code linting and formatting
- **Nodemon**: Development server with auto-restart
- **Postman**: API testing and documentation

## 💻 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbdulrahmanAbozaid/BlogApp.git
   cd BlogApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/blogapp
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=7d
   NODE_ENV=development
   ```

4. **Database Setup**
   ```bash
   # Make sure MongoDB is running
   # The application will create necessary collections automatically
   ```

5. **Start the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
BlogApp/
├── server.js              # Entry point
├── config/
│   ├── database.js        # Database configuration
│   └── auth.js            # Authentication middleware
├── models/
│   ├── User.js            # User model schema
│   ├── Post.js            # Blog post model schema
│   └── Category.js        # Category model schema
├── routes/
│   ├── auth.js            # Authentication routes
│   ├── posts.js           # Blog post routes
│   ├── users.js           # User management routes
│   └── admin.js           # Admin panel routes
├── controllers/
│   ├── authController.js  # Authentication logic
│   ├── postController.js  # Post management logic
│   └── userController.js  # User management logic
├── middleware/
│   ├── auth.js            # Authentication middleware
│   ├── validation.js      # Input validation
│   └── errorHandler.js    # Error handling middleware
├── public/
│   ├── css/               # Stylesheets
│   ├── js/                # Frontend JavaScript
│   └── images/            # Static images
├── views/
│   ├── layouts/           # EJS layouts (if using EJS)
│   ├── posts/             # Post-related views
│   ├── auth/              # Authentication views
│   └── admin/             # Admin panel views
├── tests/
│   ├── auth.test.js       # Authentication tests
│   ├── posts.test.js      # Post functionality tests
│   └── users.test.js      # User management tests
└── package.json           # Dependencies and scripts
```

## 🔧 API Endpoints

### Authentication
```
POST   /api/auth/register    # User registration
POST   /api/auth/login       # User login
GET    /api/auth/profile     # Get user profile
PUT    /api/auth/profile     # Update user profile
POST   /api/auth/logout      # User logout
```

### Blog Posts
```
GET    /api/posts            # Get all posts (with pagination)
GET    /api/posts/:id        # Get single post
POST   /api/posts            # Create new post (auth required)
PUT    /api/posts/:id        # Update post (auth required)
DELETE /api/posts/:id        # Delete post (auth required)
GET    /api/posts/category/:category # Get posts by category
```

### User Management
```
GET    /api/users            # Get all users (admin only)
GET    /api/users/:id        # Get user by ID
PUT    /api/users/:id        # Update user (admin/owner only)
DELETE /api/users/:id        # Delete user (admin only)
```

## 🔒 Security Features

- **Password Encryption**: bcrypt hashing with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **SQL Injection Prevention**: MongoDB queries with proper sanitization
- **XSS Protection**: Content sanitization and proper escaping
- **Rate Limiting**: Prevent API abuse and brute force attacks

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- auth.test.js
```

### Test Coverage
- Authentication endpoints
- CRUD operations for posts
- User management functionality
- Middleware validation
- Error handling scenarios

## 📊 Database Schema

### User Model
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['admin', 'author', 'reader']),
  profile: {
    firstName: String,
    lastName: String,
    bio: String,
    avatar: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Post Model
```javascript
{
  title: String (required),
  content: String (required),
  excerpt: String,
  author: ObjectId (ref: 'User'),
  category: String,
  tags: [String],
  status: String (enum: ['draft', 'published']),
  featured: Boolean,
  publishedAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## 🚀 Deployment

### Heroku Deployment
1. Install Heroku CLI
2. Create Heroku app: `heroku create your-blog-app`
3. Set environment variables: `heroku config:set MONGODB_URI=your_mongodb_atlas_uri`
4. Deploy: `git push heroku main`

### Docker Deployment
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔮 Future Enhancements

- [ ] **Rich Media Support**: Image and video uploads
- [ ] **Advanced Editor**: WYSIWYG editor integration
- [ ] **Email Notifications**: Comment and post notifications
- [ ] **Social Login**: OAuth integration (Google, Facebook)
- [ ] **SEO Optimization**: Meta tags and sitemap generation
- [ ] **Performance**: Redis caching implementation
- [ ] **Mobile App**: React Native companion app
- [ ] **Analytics**: Google Analytics integration

## 🤝 Contributing

This project was developed as a graduation project for GDSC Node.js program. Contributions and suggestions are welcome!

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the existing code style and conventions
4. Write tests for new functionality
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abdulrahman Abuzeid**
- LinkedIn: [Abdulrahman Abuzeid](https://www.linkedin.com/in/abdulrahman-abuzeid-a5a347231)
- Email: abdulrahman.ab.mahmoud@gmail.com
- GitHub: [@AbdulrahmanAbozaid](https://github.com/AbdulrahmanAbozaid)

## 🎓 Academic Context

This project was developed as the **graduation project** for the **Google Developer Student Clubs (GDSC) Node.js Specialization Program** (2022-2023). It demonstrates comprehensive understanding of:

- Full-stack web development with Node.js
- RESTful API design and implementation
- Database design and management
- User authentication and authorization
- Security best practices
- Testing methodologies
- Project documentation and deployment

## 🙏 Acknowledgments

- **Google Developer Student Clubs** for the comprehensive Node.js program
- **GDSC Damanhour** team for guidance and support
- **Node.js Community** for excellent documentation and resources
- **MongoDB** for the robust database solution

---

**⭐ If you found this project helpful, please consider giving it a star!**

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Contact me via email or LinkedIn
- Check the troubleshooting section in the wiki

---

*Built with ❤️ using Node.js and Express.js*

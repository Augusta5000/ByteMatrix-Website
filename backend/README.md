# ByteMatrix Backend

This is the backend server for the ByteMatrix website. It provides API endpoints for contact form submissions, portfolio management, and testimonials.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bytematrix
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Contact Form
- POST `/api/contact` - Submit contact form

### Portfolio
- GET `/api/portfolio` - Get all portfolio items
- GET `/api/portfolio/category/:category` - Get portfolio items by category
- POST `/api/portfolio` - Create new portfolio item (protected)

### Testimonials
- GET `/api/testimonials` - Get all testimonials
- POST `/api/testimonials` - Create new testimonial (protected)

## Deployment

1. Set up MongoDB Atlas account and get connection string
2. Update `.env` file with production values
3. Deploy to Render:
   - Connect GitHub repository
   - Set environment variables
   - Deploy

## Frontend Integration

The frontend can connect to these endpoints using the following base URL:
```
http://localhost:5000/api
```

For production, update the base URL to your deployed backend URL. 
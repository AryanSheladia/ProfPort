# ProfPort Backend

Backend API for ProfPort project, handling consultancy bookings and contact messages.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Set up environment variables in `.env`:
   - `PORT`: Server port (default 5000)
   - `MONGODB_URI`: MongoDB connection string (e.g., mongodb://localhost:27017/DT)

3. Start the server:
   ```
   npm start
   ```

   For development:
   ```
   npm run dev
   ```

## API Endpoints

### Consultancy Bookings

- `POST /api/consultancy` - Create a new booking
- `GET /api/consultancy` - Get all bookings

### Contact Messages

- `POST /api/contact` - Send a contact message
- `GET /api/contact` - Get all messages

### Health Check

- `GET /api/health` - Check server status

## Models

- **Consultancy**: name, email, organization, service, date, time, notes
- **Contact**: name, email, subject, message

## Database

Uses MongoDB with Mongoose. Database name: DT

Ensure MongoDB is running locally or update the connection string accordingly.

# IT IS POSSIBLE Moto Marketplace

Redux Moto Marketplace is a modern web application designed for discovering, browsing, and filtering second-hand motorcycles. Built with React, Redux, and TypeScript, this platform provides a seamless user experience tailored for Tanzanian motorcycle enthusiasts.

---

## Features

* Browse motorcycles by brand, category, and other attributes
* Dynamic category-based filtering (e.g., Boxer, TVS, Honda, Yamaha)
* Fully responsive design for mobile, tablet, and desktop
* Smooth user interface using Tailwind CSS and Framer Motion
* Live API integration for real-time motorcycle listings
* Price display formatted in Tanzanian Shillings (TZS)

---

## Tech Stack

* **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
* **State Management**: Redux
* **Routing**: React Router
* **Backend Integration**: Custom API services
* **Styling**: Tailwind CSS

---

## Folder Structure

```
redux-moto-marketplace/
├── src/
│   ├── api/                # Backend API service functions
│   ├── assets/             # Images and other static resources
│   ├── components/         # Reusable UI components
│   │   ├── navbar/         # Navigation components
│   │   ├── bodyCards/      # Motorcycle display cards
│   │   ├── pageComponents/ # Components tied to specific pages
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions and helpers
│   ├── styles/             # Global and modular styles
│   ├── App.tsx             # Application entry component
│   ├── index.tsx           # ReactDOM rendering
├── public/                 # Static public files
├── package.json            # Project configuration and dependencies
```

---

## Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/IT-SPOSSIBLE/frontend.git
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Development Server

```bash
npm run dev
```

### Step 4: Open the App

Navigate to [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## Usage

* Filter motorcycles by category using the navigation bar.
* Click on any motorcycle card to view more details.
* Explore the responsive layout on different device sizes.
* Data is dynamically loaded from a backend API using `getAllCards` in `MotoServices.ts`.

---

## Key Components

### CardMoto

Displays essential information for each motorcycle, including title, price, image, and category.

### Product

Renders all motorcycles in a responsive grid layout and supports dynamic filtering based on selected categories.

### HeaderNavigation

Top-level navigation that includes links to different pages and user authentication status (if implemented).

---

## API Integration

The frontend interacts with a backend API for retrieving motorcycle data. Ensure the backend is running and accessible before starting the frontend application.

* The main API interaction occurs in `MotoServices.ts`
* The expected response should include motorcycle details, categories, and images

---

## Database Schema (Backend Overview)

### Motorcycles Table

| Column      | Type      | Description             |
| ----------- | --------- | ----------------------- |
| id          | Integer   | Primary key             |
| title       | String    | Name of the motorcycle  |
| price       | Decimal   | Motorcycle price in TZS |
| status      | Enum      | Available, Sold, etc.   |
| created\_at | Timestamp | Creation date           |

### Categories Table

| Column         | Type      | Description            |
| -------------- | --------- | ---------------------- |
| id             | Integer   | Primary key            |
| category\_name | String    | e.g., Boxer, TVS, etc. |
| created\_at    | Timestamp | Category creation time |

### Images Table

| Column       | Type        | Description                     |
| ------------ | ----------- | ------------------------------- |
| id           | Integer     | Image identifier                |
| image        | String      | Image filename or URL           |
| is\_primary  | Boolean     | Marks if it's the primary image |
| uploaded\_at | Timestamp   | Image upload date               |
| moto         | Foreign Key | References `Motorcycles.id`     |

---

## Contributing

We welcome contributions to improve this project. Follow these steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b your-feature-name`
3. Make your changes and commit: `git commit -m "Add feature-name"`
4. Push to your fork: `git push origin your-feature-name`
5. Create a pull request

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Contact

For support or inquiries, reach out via:

* Email: [finesawa36@gmail.com](mailto:finesawa36@gmail.com)
* GitHub: [your-username](https://github.com/FineDR)


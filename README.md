# Product Listing Page

This project is a **Next.js** application that displays a list of products with options for filtering, sorting, searching, and viewing product details. The project is designed to showcase proficiency in Next.js, state management, routing, and responsive UI design.

## Description

The Product Listing Page application allows users to:

- **Filter Products**:
  - By category.
  - By price range.
- **Sort Products**: By price (low to high or high to low).
- **Search Products**: Search bar for filtering products by name.
- **View Product Details**: Display detailed product information on a separate page.

## Features

- **Routing**: Handled with **Next.js** dynamic routes.
- **State Management**: Implemented with **Redux Toolkit**.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Pagination**: Manage large product lists with ease.
- **Product Details Page**: View extended information about a specific product..

## Tech Stack

- **Frontend**:

  - **Next.js**: Server-side rendering and dynamic routing.
  - **React**: Component-based architecture.
  - **Redux Toolkit**: For managing global state.
  - **Tailwind CSS**: For styling the application.
  - **Axios**: Promise-based HTTP client for the frontend to interact with the backend API.
  - **TypeScript**: For static type checking.

- **Backend (Optional)**:
  - The project uses a static JSON file as a mock API. You can integrate a real backend by replacing the API calls.

## Installation and Running Locally

### 1. Clone the Repository
   - Open your terminal or command prompt.
   - Clone the repository using Git by running the following command:
     ```bash
       git clone https://github.com/nmocherniuk/product-listing-page.git
     ```


### 2. Navigate to the Project Directory:
   - After cloning, navigate to the extracted project folder:
      ```bash
        cd product-listing-page
      ```

### 3. Set Up Environment Variables:
   - Create a .env or .env.local file in the root directory of the project. This file will contain your environment-specific settings.
   - Add the following line to the .env.local file to configure the product data source:
      ```bash
        NEXT_PUBLIC_PRODUCTS_URL=/data/products.json
       ```
      Replace /data/products.json with your product data URL if needed.
  - **Note**: The .env or .env.local file is ignored by Git, so keep it secure and private.

### 4. Install Dependencies:
    - Run the following command to install all the necessary dependencies:
      ```bash
        npm install
      ```
      OR
      ```bash
       yarn install
      ```

### 5. Start the Development Server:

   ```bash
   npm run dev
   ```
   OR
   ```bash
   yarn dev
   ```
   
   The frontend will run on `http://localhost:3000`.


### Prerequisites:

- **Node.js** (v16 or later)
- **npm** or **yarn**

### License

You can copy and paste this Markdown code into your README file on GitHub, and it will render nicely!

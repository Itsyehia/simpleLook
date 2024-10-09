# Simple Look E-Commerce Web App

## Project Overview
**Simple Look** is a dynamic e-commerce web application built using HTML, CSS, JavaScript, and JSON. The app provides users with a seamless online shopping experience, featuring an image slider, user registration & validation, and a cart calculation system.

### Features
- **Image Slider**: A dynamic and responsive image slider on the homepage to showcase products.
- **User Registration & Validation**: Allows users to register, log in, and validate their information.
- **Cart Calculation**: Real-time calculation of total price based on items in the cart.
- **Footer & Header**: Consistent design and navigation across all pages.
- **JSON Data Handling**: Product information is dynamically loaded from a JSON file for easy scalability.

## Technologies Used
- **HTML**: Structure and layout of the web pages.
- **CSS**: Styling for a responsive and modern design.
- **JavaScript**: Client-side functionality for user interaction and dynamic content.
- **JSON**: Data management for products, allowing easy updates and scaling of product information.

## Project Structure
```
simple-look/
│
├── index.html              # Homepage with the image slider and product listings
├── registration.html        # User registration page with form validation
├── cart.html                # Shopping cart page with real-time price calculation
├── js/
│   ├── main.js             # JavaScript for dynamic features (slider, validation, cart)
│   └── data.json           # JSON file containing product data
├── css/
│   └── styles.css          # Styles for the overall layout and design
└── assets/
    └── images/             # Folder for storing images used in the app
```

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-look.git
   ```

2. Navigate to the project directory:
   ```bash
   cd simple-look
   ```

3. Open `index.html` in your browser to view the homepage.

4. Navigate to `registration.html` to register as a user, or explore the `cart.html` page to see cart calculation in action.

## Key Features Explained

### Image Slider
- Implemented using JavaScript to create a responsive slider showcasing featured products.
- Images can be easily updated or added in the `assets/images/` folder.

### User Registration & Validation
- A registration form in `registration.html` that uses JavaScript for input validation to ensure correct user data.

### Cart Calculation
- Users can add items to their cart, and the total price is calculated dynamically as they add or remove products.

### JSON Data Handling
- Product data is stored in a `data.json` file for easy updating and management of product listings without touching HTML.

## Future Enhancements
- Add a product filter or search functionality to improve user experience.
- Integrate a backend for order processing and user authentication.
- Add more advanced features such as product categories and payment integration.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Author
**Yehia**

Feel free to explore, fork, and contribute to this project!
```

# Karthik Homes Pvt Ltd - Premium Real Estate Website

A modern, responsive website for Karthik Homes Pvt Ltd, featuring a complete e-commerce experience for luxury home sales with shopping cart functionality.

## 🏠 Features

### Core Functionality
- **Modern Design**: Clean, professional layout with premium UI/UX
- **Property Catalog**: Showcase of luxury homes with detailed information
- **Shopping Cart**: Add properties to cart and manage selections
- **Property Filtering**: Filter by property type (Villa, Apartment, Penthouse)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Modals**: Detailed property view with high-quality images

### Property Types
- **Luxury Villas**: Premium standalone homes with gardens
- **Modern Apartments**: Contemporary living spaces in prime locations
- **Exclusive Penthouses**: Ultra-luxury homes with panoramic views

### Technical Features
- **Local Storage**: Cart persistence across browser sessions
- **Smooth Animations**: CSS transitions and scroll-triggered animations
- **Mobile Navigation**: Hamburger menu for mobile devices
- **WhatsApp Integration**: Direct contact for property inquiries
- **Notification System**: Real-time feedback for user actions
- **Performance Optimized**: Lazy loading and efficient resource management

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local development server)

### Installation & Setup

1. **Clone or Download** the project files to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd karthik-homes-website
   ```

3. **Start the development server**:
   ```bash
   python -m http.server 8000
   ```
   
   Or alternatively:
   ```bash
   npm start
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
karthik-homes-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
└── README.md          # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #e74c3c (Red) - Brand color for CTAs and highlights
- **Secondary**: #2c3e50 (Dark Blue) - Text and headers
- **Accent**: #f39c12 (Orange) - Notifications and badges
- **Neutral**: #7f8c8d (Gray) - Supporting text

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🏡 Sample Properties

The website includes 8 sample properties across different categories:

### Villas
1. **Luxury Villa Paradise** - Whitefield, Bangalore (₹2.5 Cr)
2. **Garden Villa Estate** - HSR Layout, Bangalore (₹3.2 Cr)
3. **Royal Heritage Villa** - Richmond Town, Bangalore (₹2.8 Cr)

### Apartments
1. **Elegant Apartment** - Indiranagar, Bangalore (₹1.2 Cr)
2. **Cozy Family Apartment** - Jayanagar, Bangalore (₹85 L)

### Penthouses
1. **Modern Penthouse** - Koramangala, Bangalore (₹1.8 Cr)
2. **Sky High Penthouse** - UB City, Bangalore (₹4.5 Cr)
3. **Executive Penthouse** - Brigade Road, Bangalore (₹2.2 Cr)

## 🛒 Shopping Cart Features

- **Add to Cart**: Add properties to your shopping list
- **Remove Items**: Remove properties from cart
- **Persistent Storage**: Cart data saved in browser's local storage
- **Total Calculation**: Automatic price calculation
- **Checkout Process**: Simulated checkout with confirmation
- **Mobile Optimized**: Full-screen cart on mobile devices

## 📱 Mobile Features

- **Hamburger Menu**: Collapsible navigation for mobile
- **Touch-Friendly**: Optimized buttons and interactions
- **Responsive Images**: Properly scaled images for all devices
- **Mobile Cart**: Full-screen cart experience
- **Swipe Gestures**: Enhanced mobile interactions

## 🔧 Customization

### Adding New Properties
Edit the `properties` array in `script.js`:

```javascript
{
    id: 9,
    title: "Your Property Title",
    location: "Location, City",
    price: 15000000,
    type: "villa", // villa, apartment, or penthouse
    bedrooms: 3,
    bathrooms: 2,
    area: "2500 sq ft",
    image: "https://your-image-url.jpg",
    badge: "New",
    description: "Property description here."
}
```

### Styling Customization
Modify variables in `styles.css`:

```css
:root {
    --primary-color: #e74c3c;
    --secondary-color: #2c3e50;
    --accent-color: #f39c12;
}
```

### Contact Information
Update contact details in `index.html` and the WhatsApp integration in `script.js`.

## 🌟 Key Functionalities

### Property Filtering
- Filter by property type using the filter buttons
- Dynamic rendering of filtered results
- Smooth animations for property cards

### Property Details Modal
- Click "View Details" to see expanded property information
- High-quality images and detailed descriptions
- Direct contact integration

### Contact Integration
- WhatsApp integration for instant communication
- Contact form with validation
- Multiple contact methods (phone, email, address)

### Performance Optimization
- Lazy loading for images
- Efficient DOM manipulation
- Optimized CSS and JavaScript
- Smooth scrolling and animations

## 📞 Contact Information

- **Phone**: +91 98765 43210
- **Email**: info@karthikhomes.com
- **Address**: 123 Premium Street, Luxury District, City 560001

## 🚀 Future Enhancements

Potential features that can be added:
- User authentication and profiles
- Property comparison feature
- Advanced search and filters
- Virtual property tours
- Payment gateway integration
- Admin panel for property management
- Blog section for real estate insights
- Customer testimonials
- Property investment calculator

## 📄 License

This project is created for Karthik Homes Pvt Ltd. All rights reserved.

## 🤝 Support

For technical support or inquiries about the website, please contact the development team or reach out through the contact form on the website.

---

**Built with ❤️ for Karthik Homes Pvt Ltd**
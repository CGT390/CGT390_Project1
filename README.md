# CGT390_Project1 - React + Vite

Github Repo: https://github.com/CGT390/CGT390_Project1
View at: https://cgt390.github.io/CGT390_Project1/

This project is a React single-page application (SPA) built with **Vite**.  
It features a dynamic navbar, a banner, and a content wrapper that updates based on route navigation. The app is designed to be hosted under the subdirectory `/CGT390_Project1/` (for example, on GitHub Pages).

---

## 📂 Features

- React + Vite setup with HMR (Hot Module Replacement)  
- React Router for SPA navigation  
- Navbar dynamically changes content in the wrapper  
- Sticky top navbar and banner  
- Smooth scroll-to-top behavior on route change  

---

## 🔧 Installation

1. **Clone the repository**

```bash
git clone <your-repo-link>
cd CGT390_Project1

#Install Dependencies
npm install

#Then Run 
npm run dev

---

## 🔧 Checkpoint 2

In this iteration, I added some interactive components like...
 - A footer
 - A menu with a 'jump to' section
 - A rough 'order online' section that allows the user to add things to a 'Cart'
    - This cart is purely frontend, it doesnt send anything to any backend
    - re-renders things in the middle menu section depending on what button is selected
 - A rough 'Apply' form that only allows specific content
    
In the future, I plan to...  
 - make the 'checkout' easier to use, and to add overlays that make it more clear what the user is ordering
 - Add better buttons/CSS for the 'Apply' page
 - Add content for the 'Contact' pages
 - add more CSS and color to the website overall
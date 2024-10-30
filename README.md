# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring particle animations, smooth transitions, and interactive elements.

## 🚀 Features

- Responsive design for all devices
- Interactive particle background
- Smooth page transitions
- Dynamic project showcase
- Contact form with email validation
- Downloadable CV
- Social media integration
- Professional skill visualization
- Docker support for containerization

## 🛠️ Built With

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- React Icons
- Swiper
- TSParticles
- Radix UI Components
- Docker

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/your-portfolio.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Docker Setup

1. Build the Docker image

```bash
docker build -t portfolio .
```

2. Run the container
```bash
docker run -p 3000:3000 portfolio
```

## 📁 Project Structure

portfolio/
├── app/ # Next.js app directory
│ ├── contact/ # Contact page
│ ├── resume/ # Resume page
│ ├── work/ # Projects showcase
│ └── layout.jsx # Root layout
├── components/ # Reusable components
├── public/ # Static assets
└── styles/ # Global styles
```

## 🚀 Deployment

The project can be deployed on Vercel with these steps:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CONTACT_FORM_KEY=your_form_key
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details

## 👤 Author

Bibek Thapa
- LinkedIn: [/bibek-thapa1](https://www.linkedin.com/in/bibek-thapa1/)
- GitHub: [@B-KEY](https://github.com/B-KEY)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- All open-source contributors
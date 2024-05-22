# PixieCases

![Project Image](https://github.com/soulaimane0/pixie-cases/blob/main/public/thumbnail.png)

## Overview

PixieCases is a customizable phone case e-commerce web application built using Next.js. Users can design and create high-quality, personalized phone cases with ease. The project includes features like image upload, customization, and a seamless checkout process.

## Features

- 📸 Upload and customize images for phone cases
- 🖼️ Real-time preview of custom designs
- 💳 Secure payment processing with Stripe
- 📧 Order confirmation emails using Resend
- 📱 Responsive design for a seamless user experience on all devices

## Technologies Used

- **Next.js**: React framework for building server-side rendered applications
- **Stripe**: Payment processing platform
- **Kinde**: Authentication and authorization service
- **Uploadthing**: For file uploads
- **React RND**: For drag-and-drop and resize functionality
- **Prisma**: Database toolkit for Node.js
- **Zod**: For data validation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn ui**: For the design system
- **Resend**: Email sending service
- and more...

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Pnpm
- Kinde account
- Neon.tech account
- Stripe account
- Uploadthing account
- Resend account (optional)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/soulaimane0/pixie-cases.git
   cd pixiecases
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

### Usage

1. **Start the development server**:

   ```bash
   pnpm dev
   ```

2. **Build for production**:

   ```bash
   pnpm build
   ```

## Customization Workflow

1. **Upload an Image**:

   - Users can upload an image from their device to start customizing their phone case.

2. **Customize the Design**:

   - Users can resize and position the uploaded image.

3. **Preview and Checkout**:

   - Users can preview the final design, proceed to checkout, and make a payment.

4. **Receive Confirmation**:
   - An order confirmation email is sent to the user upon successful payment.

## License

[MIT](https://choosealicense.com/licenses/mit/)

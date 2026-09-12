# React + Vite

## Enquiry email setup

All enquiry forms submit to `/api/contact`, a Vercel server function using Resend.
Configure these server environment variables in the hosting project before deploying:

- `RESEND_API_KEY`: a Resend API key with permission to send email.
- `CONTACT_FROM`: a sender address on a domain verified in Resend, for example `Agrim Website <enquiries@agrim.africa>` once that domain is verified.
- `CONTACT_TO`: `info@agrim.africa` (also the default when omitted).

Redeploy after changing the environment variables. Never put the API key in a
`VITE_` variable or frontend code. A static-only upload of `dist` cannot run the
email function; deploy the project with its `api` directory. Plain `npm run dev`
only serves the frontend, so test the function on a Vercel deployment or with Vercel's local runtime.

For delivery problems, inspect the `/api/contact` response and hosting function
logs, then check Resend's email delivery logs. An accepted API request does not
guarantee inbox delivery; verify delivery status and the recipient spam folder.
Provider reference: https://resend.com/docs/api-reference/emails/send-email

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

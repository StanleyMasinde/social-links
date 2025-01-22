## Social Links

> This repository contains links to all my social profiles.

### Features

1.  **Simple and Accessible:** Easy to use and understand.
2.  **SEO Friendly:** Optimized for search engines.
3.  **Easy to Copy/Reuse:** Easily adaptable for your own use.
4.  **Configurable Links:** Customize the links displayed.

### Upcoming Features

1.  Analytics

### Running Locally

This project uses [Tailwind CSS][tailwind] for styling.

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:StanleyMasinde/social-links.git
    ```
2.  **Install dependencies:**
    ```bash
    npm i
    ```
3.  **Run the dev server:**
    ```bash
    npm run dev
    ```

### Using This for Your Own Links

1.  **Clone the repository:** (See [Running Locally](#running-locally))
2.  **Install dependencies:** (See [Running Locally](#running-locally))
3.  **Update `public/links.json`:** Replace the existing links with your own. The file should contain a JSON array of link objects. Example:

    ```json
    [
      {"platform": "twitter", "url": "<url>"},
      {"platform": "github", "url": "<url>"}
    ]
    ```

4.  **Deploy:** Deploy the generated files to your web server.

### Tools Used

1.  [Vite][vite] - Next Generation Frontend Tooling
2.  [Tailwind.css][tailwind] - Rapidly build modern websites without ever leaving your HTML.

[tailwind]: https://tailwindcss.com/
[vite]: https://vitejs.dev

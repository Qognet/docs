# ![Qognet Documentation](./public/Assets/Qog%20Doc%20Dark.svg)

> This is the official documentation for **Qognet**, Defensive AI.

This repository serves as the central knowledge base for <a href="https://www.qognet.ai/">Qognet</a>'s technology, architecture, and products. It is designed to be a comprehensive resource for developers, node operators, and security researchers.

**[Explore the live docs »](https://docs.qognet.ai)**


## 🛠️ Local Development

To run the documentation site on your local machine for editing and previewing changes:

1.  **Prerequisites**
    *   Node
    *   npm
    *   vitepress

2.  **Clone & Install**
    ```sh
    git clone https://github.com/Qognet/docs.git
    ```
    ```sh
    cd docs
    ```
    ```sh
    npm install
    ```

3.  **Run the Dev Server**
    This command starts a local server with hot-reloading.
    ```sh
    npm run docs:dev
    ```
    The site will be available at `http://localhost:5173`.



## 🗂️ Directory Structure

```text
docs/

├── Qognet Intelligence Ecosystem/  # The Ecosystem of Qognet (AI, Mesh, Biofirewall, etc.)
├── Mesh Architecture/              # Documentation for Nodes (SN, CN, VN)
├── Technology/                     # Core tech specs (RLNC, ZK-IDN)
└── public/                         # Static assets (images, logos)
```

## Contribution Guidelines

We love contributions from the community! Whether you're fixing typos,
improving content clarity, or adding new topics, every contribution helps.

* Fork & clone: Fork this repository and clone it to your local machine.
* Branch: Always create a new branch for your changes. Naming it relevantly.
* Commit Changes: Make your changes and commit them with a clear and concise
  commit message.
* Push & Create PR: Push your changes to your fork and create a pull request
  to the main branch of this repository.

Please ensure to review the detailed Contribution Guidelines above before
making a pull request.

### Link Format Guidelines

When adding internal links to documentation, please use the following format:
`[link text](/base-working-dir/subdir/page.md#section-id)`, i.e.
`[link text](/getting-started/setup-nodes/sentinel-node.md#node-setup-overview)`

This format ensures long-term compatibility and consistent behavior across
different platforms and documentation builds.

## Feedback & Suggestions

We value feedback from the community. If you have suggestions for improvements
or find any discrepancies in the documentation, please raise an issue in this
repository.
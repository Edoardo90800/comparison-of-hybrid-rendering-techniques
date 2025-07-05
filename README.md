# Comparison of Hybrid Rendering Techniques 🖥️✨

Welcome to the **Comparison of Hybrid Rendering Techniques** repository! This project serves as a research monorepo for a master's thesis focused on rendering performance in React applications. Here, you will find valuable insights, experiments, and results that explore various rendering techniques.

[![Download Releases](https://img.shields.io/badge/Download_Releases-blue.svg)](https://github.com/Edoardo90800/comparison-of-hybrid-rendering-techniques/releases)

## Table of Contents

- [Introduction](#introduction)
- [Topics Covered](#topics-covered)
- [Getting Started](#getting-started)
- [Methodology](#methodology)
- [Rendering Techniques](#rendering-techniques)
- [Performance Testing](#performance-testing)
- [Results](#results)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Rendering performance is crucial in modern web applications, especially those built with React. This repository aims to compare different hybrid rendering techniques, including Client-Side Rendering (CSR), Server-Side Rendering (SSR), and Static Site Generation (SSG). By evaluating these methods, we can better understand their impact on performance and user experience.

The findings from this research can guide developers in choosing the right rendering strategy for their applications. 

## Topics Covered

This repository covers the following key topics:

- **CSR**: Client-Side Rendering
- **ISR**: Incremental Static Regeneration
- **Next.js**: A popular React framework
- **Performance Testing**: Techniques and tools for measuring performance
- **PSSR**: Partial Server-Side Rendering
- **React**: A JavaScript library for building user interfaces
- **Rendering Techniques**: Various approaches to rendering
- **RSC**: React Server Components
- **SSG**: Static Site Generation
- **SSR**: Server-Side Rendering

## Getting Started

To get started with this repository, you can clone it to your local machine using the following command:

```bash
git clone https://github.com/Edoardo90800/comparison-of-hybrid-rendering-techniques.git
```

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

After cloning the repository, navigate to the project directory and install the dependencies:

```bash
cd comparison-of-hybrid-rendering-techniques
npm install
```

### Running the Project

You can run the project locally using:

```bash
npm start
```

This command will start the development server, and you can view the application in your browser at `http://localhost:3000`.

## Methodology

In this research, we implemented various rendering techniques in React applications. We designed a series of experiments to measure and compare their performance. The methodology involved:

1. **Setting Up the Environment**: Configuring the necessary tools and frameworks.
2. **Implementing Rendering Techniques**: Coding different rendering strategies.
3. **Performance Testing**: Using tools like Lighthouse and WebPageTest to measure performance metrics.
4. **Data Analysis**: Analyzing the collected data to draw conclusions.

## Rendering Techniques

### Client-Side Rendering (CSR)

CSR involves rendering content in the browser using JavaScript. The server sends a minimal HTML page, and the browser fetches the necessary data and renders it. This method is common in single-page applications (SPAs).

**Pros**:
- Fast interactions after the initial load.
- Rich user experience.

**Cons**:
- Slower initial load times.
- SEO challenges.

### Server-Side Rendering (SSR)

SSR renders content on the server and sends a fully populated HTML page to the client. This approach improves initial load times and SEO.

**Pros**:
- Faster initial load.
- Better SEO.

**Cons**:
- Increased server load.
- Slower interactions after the initial load.

### Static Site Generation (SSG)

SSG generates static HTML pages at build time. This method is suitable for content that does not change often.

**Pros**:
- Fast performance.
- Simple deployment.

**Cons**:
- No dynamic content.
- Requires a rebuild for updates.

### Incremental Static Regeneration (ISR)

ISR combines the benefits of SSG and allows for updates without a full rebuild. It generates static pages and can revalidate them at specified intervals.

**Pros**:
- Fast performance with dynamic updates.
- Good for frequently changing content.

**Cons**:
- Complexity in setup.
- Cache management.

### Partial Server-Side Rendering (PSSR)

PSSR allows for a mix of SSR and CSR. It serves some content from the server and other parts from the client.

**Pros**:
- Flexibility in rendering.
- Optimized performance.

**Cons**:
- More complex implementation.
- Requires careful management of state.

### React Server Components (RSC)

RSC allows developers to build components that can render on the server. This approach can improve performance by reducing the amount of JavaScript sent to the client.

**Pros**:
- Better performance.
- Reduced bundle size.

**Cons**:
- Limited support in the ecosystem.
- Requires a different mindset for development.

## Performance Testing

Performance testing is crucial to evaluate the effectiveness of different rendering techniques. We used several tools for testing:

- **Lighthouse**: An open-source tool for measuring performance, accessibility, and SEO.
- **WebPageTest**: A tool that provides detailed performance metrics.
- **React Profiler**: A built-in tool to analyze the performance of React components.

### Metrics Collected

During our testing, we focused on the following metrics:

- **First Contentful Paint (FCP)**: Measures the time it takes for the first piece of content to appear.
- **Time to Interactive (TTI)**: Measures how long it takes for the page to become fully interactive.
- **Speed Index**: Measures how quickly the contents of a page are visibly populated.
- **Cumulative Layout Shift (CLS)**: Measures visual stability and how much layout shifts during loading.

## Results

The results of our performance tests showed clear differences between the rendering techniques. 

### CSR vs. SSR

- CSR had a slower initial load but faster interactions afterward.
- SSR provided a better initial load time but could be slower for subsequent interactions.

### SSG vs. ISR

- SSG performed exceptionally well for static content.
- ISR offered a good balance between performance and dynamic content updates.

### PSSR and RSC

- PSSR provided flexibility but required careful management.
- RSC showed promise in reducing bundle size and improving performance.

Overall, the choice of rendering technique depends on the specific use case and requirements of the application.

## Contributing

We welcome contributions to this project. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Create a pull request.

Please ensure that your code follows the project's coding standards and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out:

- **Email**: edoardo@example.com
- **GitHub**: [Edoardo90800](https://github.com/Edoardo90800)

You can also check the [Releases](https://github.com/Edoardo90800/comparison-of-hybrid-rendering-techniques/releases) section for the latest updates and downloadable files.

Thank you for your interest in the **Comparison of Hybrid Rendering Techniques** repository! We hope you find the information valuable for your projects and research.
# Filimo-challenge
# Dynamic Video Filtering App

 

## Introduction

 

The Video Filtering App was developed as part of a coding challenge. The challenge required creating an application with the ability to filter and organize videos based on a dynamic page URL. This document presents an overview of the key features and components implemented in the solution.

 

## Challenge Overview

 

The challenge was to build a web application that allows users to browse and filter videos in real-time. The application needed to provide a seamless user experience by dynamically updating the video grid based on user-selected filters.

 

## Features Implemented

 

The following features were implemented as part of the challenge solution:

 

- **Dynamic Page With Changing URL:** A dynamic page was designed to display videos in a grid format. The page automatically updates as users apply or remove filters. When users apply filters, the page URL changes based on the applied filters. This allows users to share the URL or open it in another browser while maintaining identical content.

 

- **Video Filtering:** Advanced filtering logic was implemented to enable users to filter videos by genre.

 

- **Sorting Options:** Users were provided with sorting options to arrange videos by rating. Both genre filters and sorting options can be applied together.

 

- **Responsive Design:** The application was developed with a responsive design, ensuring an optimal user experience across different devices.

 

- **User-Friendly Interface:** The user interface was carefully crafted to be intuitive and visually appealing, catering to users of varying technical backgrounds.

 

## Technical Components

 

The solution comprised the following technical components:

 

1. **Next.js (App Router):** Using the powerful and efficient Next.js framework to build a React app is a rational choice. Next.js provides tools like image optimization, file-based routing, and more, making the development process smoother. The app is built with the latest version of Next.js, utilizing the `useRouter` from `next/router` to prevent page reloads when users navigate between pages.

 

2. **Filtering:** Filtering processes user inputs and dynamically updates the video grid based on selected filters. The URL changes immediately based on new filters and sort types. Movies are initially fetched upon loading the home page. Filter and sorting functions are called within a `useEffect` function whenever the `useSearchParam` hook value changes. URL query parameters change as users apply filters while sorting functions are applied if the sort type is different from "default." Changes are also reflected in the movie list state managed through Redux, ensuring persistence even after reloading the page.

 

3. **Responsive Layout:** The application's layout was designed to adapt to various screen sizes and orientations seamlessly. The Ant Design library and custom styles were combined to achieve this responsiveness.

 

4. **State Management:** `React Redux` was chosen as the state management solution. While React Context and Reducer, or React's `useState`, are suitable for smaller applications, Redux offers scalability. A single slice in the app is responsible for managing all home page states, contributing to a better user experience.

 

5. **Testing:** Unit testing was implemented using the `Jest` library. Each component and page has its test file with a few simple test examples written for them.

 

6. **TypeScript:** The app is developed using TypeScript instead of JavaScript for enhanced type safety and code reliability.

 

7. **API Route:** Next.js provides API routes to separate server-side API calls from the front end. This app utilizes this feature to retrieve the movie list through a serverless function.

 

## Conclusion

 

The Dynamic Video Filtering App was successfully developed as a solution to the coding challenge presented during the job interview process. The implemented features, components, and user-friendly design collectively offer an engaging and efficient way for users to filter videos. The solution aptly demonstrates the developer's capability to address complex requirements and deliver a functional application within a limited timeframe. This solution is a testament to the developer's skillset and problem-solving ability.

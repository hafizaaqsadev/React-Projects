import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.Llvht-xgYFfZekrchNus7wHaDt&pid=Api&P=0&h=220"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
React is a powerful JavaScript library used for building dynamic and responsive user interfaces. It simplifies the development process by allowing developers to create reusable components, manage state efficiently, and update the UI smoothly using a virtual DOM. With features like JSX and Hooks, React combines the flexibility of JavaScript with the clarity of a component-based structure, making it both elegant and efficient for modern web development.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
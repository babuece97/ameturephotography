import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2> Difference between authentication & authorization</h2>
            <p> Are you right person to do the specific job is called authetication and  the area of tasks for specific person is known as authorization. For example, if you right to enter the office, the we call it authetication and  eventually you have entered into the office and  certainly your tasks are being  somehow limited ,then we call it authorization </p>
            <h2> Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p> Since now-a-days security is the big issue to use the internet, specially user ID, password, personal data etc. Therefore the main aims to is   secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts </p>
            <p> There are lots of opitions to implement for authentication.
                <li> Multi-Factor Authentication</li>
                <li> Single-Factor/Primary Authentication</li>
                <li>Biometric authentication</li>
                <li> Token-based authentication</li>
                etc
            </p>
            <h2>What other services does firebase provide other than authentication?</h2>
            <p> Other than authentication , we can do lots of things with firebase. fx
                <li> Cloud Storage</li>
                <li> Hosting</li>
                <li> Cloud Functions</li>
                <li> Google Analytics</li>
                <li> Dynamic Links</li>
                etc
            </p>
        </div>
    );
};

export default Blog;
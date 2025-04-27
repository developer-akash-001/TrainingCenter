<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My-School</title>
    <link href="style.css" rel="stylesheet" type="text/css">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link href="/src/styles.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    
</head>
<body>
<!--header-->
<header class="navbar">
    <div class="container">
      <div class="logo">
        <a href="#">Training<span>Center</span></a>
      </div>
      <nav class="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#trainers">Trainers</a></li>
          <li><a href="#connect">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
 <!--end header-->
<!-- Image Slider Structure -->

<div class="slider-container">
    <div class="slider" id="imageSlider">
      <img src="School-All/Photo/1.jpg" alt="Image 1">
      <img src="School-All/Photo/2.jpg" alt="Image 2">
      <img src="School-All/Photo/1.jpg" alt="Image 3">
      <img src="School-All/Photo/4.jpg" alt="Image 4">
      <img src="School-All/Photo/2.jpg" alt="Image 5">
      <img src="School-All/Photo/1.jpg" alt="Image 6">
    </div>
  </div>
  <!--end Image Slider Structure -->
<!-- home -->
  
<div class="home" id="home">
    <div class="home-content">
      <h1>Welcome to Training Center</h1>
      <p>Your pathway to practical knowledge, career growth, and lifelong learning.</p>
      <a href="#courses" class="btn">Explore Courses</a>
    </div>
  </div>
  

 <!-- end home -->
<!-- About Us  -->

<div class="about" id="about">
    <h1 class="bg-sky-200">About Us</h1>
    <p class=""> Welcome to our Education Training Center — where learning meets opportunity.  
        We are committed to providing high-quality training programs that empower individuals to achieve peSrsonal and professional success.
        With expert instructors, practical learning, and a student-first approach, we prepare you for real-world challenges in a supportive environment.
    </p>
</div>

<!-- end About Us -->

 <!-- Courses -->
<div class="max-w-7xl mx-auto px-4 py-10">
  <h1 class="text-4xl font-bold text-center text-blue-700 mb-10" id="courses">Maltepal Courses</h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    <!-- Course 1 -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="School-All/Photo/web.png" alt="Course 1" class="w-full h-48 object-cover">
      <div class="p-5">
        <h2 class="text-xl font-bold text-gray-800 mb-2">Introduction to Web Development</h2>
        <p class="text-gray-600">Learn HTML, CSS, and JavaScript from scratch to build your own websites.</p>
        <div class="mt-4 flex justify-center">
          <a href="course1.html"
            class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            View Course
          </a>
        </div>
      </div>
    </div>

    <!-- Course 2 -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="School-All/Photo/javascript.png" alt="Course 2" class="w-full h-48 object-cover">
      <div class="p-5">
        <h2 class="text-xl font-bold text-gray-800 mb-2">JavaScript Masterclass</h2>
        <p class="text-gray-600">Deep dive into JavaScript concepts and create interactive web applications.</p>
        <div class="mt-4 flex justify-center">
          <a href="course2.html"
            class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            View Course
          </a>
        </div>
      </div>
    </div>

    <!-- Course 3 -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="School-All/Photo/Mobile App Development.jpg" alt="Course 3" class="w-full h-48 object-cover">
      <div class="p-5">
        <h2 class="text-xl font-bold text-gray-800 mb-2">Mobile App Development</h2>
        <p class="text-gray-600">Build mobile apps using Flutter and React Native with real-world projects.</p>
        <div class="mt-4 flex justify-center">
          <a href="course3.html"
            class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            View Course
          </a>
        </div>
      </div>
    </div>

    <!-- Course 4 -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="School-All/Photo/AI & Machine Learning.webp" alt="Course 4" class="w-full h-48 object-cover">
      <div class="p-5">
        <h2 class="text-xl font-bold text-gray-800 mb-2">AI & Machine Learning</h2>
        <p class="text-gray-600">Explore the world of artificial intelligence and build smart models.</p>
        <div class="mt-4 flex justify-center">
          <a href="course4.html"
            class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            View Course
          </a>
        </div>
      </div>
    </div>

    <!-- Course 5 -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="School-All/Photo/Data Science with Python.jpg" alt="Course 5" class="w-full h-48 object-cover">
      <div class="p-5">
        <h2 class="text-xl font-bold text-gray-800 mb-2">Data Science with Python</h2>
        <p class="text-gray-600">Learn data analysis, visualization, and machine learning with Python.</p>
        <div class="mt-4 flex justify-center">
          <a href="course5.html"
            class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            View Course
          </a>
        </div>
      </div>
    </div>

    <!-- Course 6 -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="School-All/Photo/Cloud Computing Basics.webp" alt="Course 6" class="w-full h-48 object-cover">
      <div class="p-5">
        <h2 class="text-xl font-bold text-gray-800 mb-2">Cloud Computing Basics</h2>
        <p class="text-gray-600">Understand the fundamentals of AWS, Azure, and Google Cloud platforms.</p>
        <div class="mt-4 flex justify-center">
          <a href="course6.html"
            class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            View Course
          </a>
        </div>
      </div>
    </div>

  </div>
</div>

  <!-- end Courses -->

  <!-- Trainers Section -->

<div class="max-w-7xl mx-auto px-4 py-16" id="trainers">
  <h2 class="text-3xl font-bold text-center text-blue-700 mb-10" >Meet Our Trainers</h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
    
    <!-- Trainer 1 -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <img src="School-All/Photo/trainer.jpg" alt="Trainer 1" class="w-28 h-28 mx-auto rounded-full mb-4 object-cover">
      <h3 class="text-lg font-semibold text-gray-800">Amit Sharma</h3>
      <p class="text-sm text-gray-600">Full Stack Web Developer</p>
    </div>

    <!-- Trainer 2 -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <img src="School-All/Photo/trainer.jpg" alt="Trainer 2" class="w-28 h-28 mx-auto rounded-full mb-4 object-cover">
      <h3 class="text-lg font-semibold text-gray-800">Priya Mehta</h3>
      <p class="text-sm text-gray-600">Data Scientist & ML Expert</p>
    </div>

    <!-- Trainer 3 -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <img src="School-All/Photo/trainer.jpg" alt="Trainer 3" class="w-28 h-28 mx-auto rounded-full mb-4 object-cover">
      <h3 class="text-lg font-semibold text-gray-800">Rahul Verma</h3>
      <p class="text-sm text-gray-600">Cloud & DevOps Engineer</p>
    </div>

  </div>
</div>
<!--end Trainers Section -->


<!-- Connect With Us Section -->
<section class="bg-blue-50 py-16" id="connect">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center text-blue-700 mb-6">Connect With Us</h2>
    <p class="text-center text-gray-600 mb-10">We'd love to hear from you! Chat with us or leave a message below.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

      <!-- Contact Info -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-blue-700 mb-4">Reach Us</h3>
        <p class="text-gray-700 mb-2">📧 Email: <a href="mailto:contact@maltepal.com" class="text-blue-600 hover:underline">contact@maltepal.com</a></p>
        <p class="text-gray-700 mb-2">📞 Phone: +91 1234567890</p>
        <div class="mt-4 flex space-x-4 text-2xl text-blue-700">
          <a href="#" class="hover:text-blue-500">🌐</a>
          <a href="#" class="hover:text-blue-500">📘</a>
          <a href="#" class="hover:text-blue-500">📸</a>
        </div>
      </div>

      <!-- Chat Box UI -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-blue-700 mb-4">Live Chat / Message</h3>
        <form class="space-y-4">
          <input type="text" placeholder="Your Name" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-400 focus:outline-none" />
          <input type="email" placeholder="Your Email" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-400 focus:outline-none" />
          <textarea rows="4" placeholder="Type your message..." class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-400 focus:outline-none"></textarea>
          <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Send</button>
        </form>
      </div>

    </div>
  </div>
</section>


<!-- Developer Section -->
<section class="bg-white py-12">
  <div class="max-w-4xl mx-auto text-center px-4">
    <h2 class="text-3xl font-bold text-blue-700 mb-6">Meet The Developer</h2>

    <div class="flex flex-col items-center space-y-4">
      <!-- Developer Photo with Hover Effect -->
      <img src="School-All/Photo/ak.jpg" alt="Developer Photo" class="w-32 h-32 rounded-full object-cover shadow-xl hover:scale-110 transform transition duration-300">

      <!-- Developer Name and Role -->
      <h3 class="text-2xl font-semibold text-gray-800 mb-2">Akash</h3>
      <p class="text-gray-600 mb-4">Software Engineer | Full Stack Developer</p>

      <!-- Social Media Links with Hover Effect -->
      <div class="flex space-x-6 justify-center text-2xl text-blue-700">
        <a href="https://github.com/rajpatel" class="hover:text-blue-500 transform transition duration-300"><i class="fab fa-github"></i>Github</a>
        <a href="https://www.linkedin.com/in/" class="hover:text-blue-500 transform transition duration-300"><i class="fab fa-linkedin">Linkedin</i></a>
      </div>

      <!-- Tech Stack Badges -->
      <!-- <div class="mt-6 space-x-4 text-gray-700">
        <span class="px-3 py-1 text-sm font-medium bg-blue-100 rounded-full">HTML</span>
        <span class="px-3 py-1 text-sm font-medium bg-blue-100 rounded-full">CSS</span>
        <span class="px-3 py-1 text-sm font-medium bg-blue-100 rounded-full">JavaScript</span>
        <span class="px-3 py-1 text-sm font-medium bg-blue-100 rounded-full">React</span>
      </div> -->
    </div>
  </div>
</section>




  <!-- Footer -->
<footer class="bg-blue-900 text-white py-10 mt-16">
  <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

    <!-- Brand / Logo -->
    <div>
      <h3 class="text-2xl font-bold mb-2">Maltepal</h3>
      <p class="text-sm text-blue-100">Empowering you with the latest tech skills to build your future.</p>
    </div>

    <!-- Quick Links -->
    <div>
      <h4 class="text-lg font-semibold mb-3">Quick Links</h4>
      <ul class="space-y-2 text-sm text-blue-100">
        <li><a href="#home" class="hover:underline">Home</a></li>
        <li><a href="#courses" class="hover:underline">Courses</a></li>
        <li><a href="#trainers" class="hover:underline">Trainers</a></li>
        <li><a href="#connect" class="hover:underline">Contact</a></li>
      </ul>
    </div>

    <!-- Contact / Social -->
    <div>
      <h4 class="text-lg font-semibold mb-3">Connect With Us</h4>
      <p class="text-sm text-blue-100">📧 contact@maltepal.com</p>
      <div class="flex justify-center md:justify-start mt-3 space-x-4">
        <a href="#" class="hover:text-blue-400">🌐</a>
        <a href="#" class="hover:text-blue-400">📘</a>
        <a href="#" class="hover:text-blue-400">📸</a>
      </div>
    </div>

  </div>

  <!-- Bottom line -->
  <div class="mt-10 border-t border-blue-800 pt-4 text-center text-sm text-blue-200">
    &copy; 2025 Maltepal. All rights reserved.
  </div>
</footer>

  <!--end Footer -->
 <script src="script.js"></script>
 <script src="https://kit.fontawesome.com/a076d05399.js"></script>
 <script src="https://kit.fontawesome.com/a076d05399.js"></script>

</div>
</body>
</html>

# Basic Artist Portfolio Template
A very barebones template for a portfolio page that showcases pictures
Has an automatic slideshow at top, and a responsive gallery below. Each picture can open an expanded section specified for that unique picture if you wish.

Link to project: <link will be here>

# How It's Made:
Tech used: HTML, CSS, JavaScript

The automatic slideshow uses Javascript; a simple for loop to move through images, and CSS for the fading effect. The grid-like gallery uses columns to achieve a 'fitting' effect, so pictures of different sizes can fill spaces. Expanded image sections are hidden by default and unhidden when an image is clicked on by a Javascript function that uses the images and sections, idenditifed via data-section and id's, to show or hide based on which image is clicked on.

# Optimizations
I considered using grid or flex for the gallery display, and those would certainly be the idea choice if the user wanted to display same-sized or same-ratio images throughout the gallery. 

# Lessons Learned:
Since this is an artist portfolio website, the idea was to have a simple design with minimal function that allows the artist to highlight their work. SEO was considered when decided whether to link each picture's individual section to a separate page, but for the sake of streamlining the user experience and being able to view the artist's gallery with minimal disruption, the choice to hide and unhide them based on image click was made.


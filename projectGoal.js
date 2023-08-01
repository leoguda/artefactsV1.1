function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "იხილეთ მეტი"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "დაბრუნდით უკან"; 
      moreText.style.display = "inline";
    }
}


// authorize popup 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBaton");
var btn1 = document.getElementById("myBtnResponsive");
var closeBtn = document.getElementsByClassName("close")[0];
 

btn.addEventListener("click", function() {
  modal.style.display = "block";
});
btn1.addEventListener("click", function() {
  modal.style.display = "block";
});
                                

closeBtn.addEventListener("click", function() {
modal.style.display = "none";
});
                                

window.addEventListener("click", function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
});


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// accordion


// const sectionHeaders = document.querySelectorAll(".section-header");
//   const sectionContents = document.querySelectorAll(".section-content");

//   // Function to toggle the visibility of section content
//   function toggleSectionContent(index) {
//     sectionContents.forEach((content, i) => {
//       if (i === index) {
//         content.classList.toggle("show");
//       } else {
//         content.classList.remove("show");
//       }
//     });
//   }

//   // Add click event listeners to section headers
//   sectionHeaders.forEach((header, index) => {
//     header.addEventListener("click", () => {
//       toggleSectionContent(index);
//     });
//   });

//   // By default, hide all section contents except the first one
//   toggleSectionContent(0);




// const items = document.querySelectorAll('.accordion button');
//   function toggleAccordion() {
//     const itemToggle = this.getAttribute('aria-expanded');
//     for (i = 0; i < items.length; i++) {
//       items[i].setAttribute('aria-expanded', 'false');
//     }
//     if (itemToggle == 'false') {
//       this.setAttribute('aria-expanded', 'true');
//     }
//   }
// items.forEach((item) => item.addEventListener('click', toggleAccordion));




// const showContentLink = document.getElementById('showContentLink');
// const hiddenContent = document.getElementById('hiddenContent');

// showContentLink.onclick = function () {
//   hiddenContent.classList.toggle('visible');
//   return false; // Prevent the link from causing a page refresh
// };



// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
  
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});


function showVideo(topic) {
  // Get the video URL based on the topic
  var videoUrl = getVideoUrl(topic);

  if (videoUrl) {
    // Create the iframe element and set its attributes
    var iframe = document.createElement('iframe');
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('src', videoUrl);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');

    // Clear the previous content in the videoContainer
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';

    // Append the iframe to the videoContainer
    videoContainer.appendChild(iframe);
  }
}

function getVideoUrl(topic) {
  // Replace these URLs with the actual video URLs for each topic
  var videoUrls = {
    'html_css_js': 'https://www.youtube.com/embed/your_html_css_js_video',
    'frameworks': 'https://www.youtube.com/embed/your_frameworks_video',
    'responsive_design': 'https://www.youtube.com/embed/your_responsive_design_video',
    'git': 'https://www.youtube.com/embed/your_git_video',
    'testing_debugging': 'https://www.youtube.com/embed/your_testing_debugging_video',
    'dev_tools': 'https://www.youtube.com/embed/your_dev_tools_video',
    'web_performance': 'https://www.youtube.com/embed/your_web_performance_video',
    'seo': 'https://www.youtube.com/embed/your_seo_video',
    // Add more video URLs for other topics if needed
  };

  return videoUrls[topic] || null;
}
function toggleMenu(){
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}

function openModal(interest) {
    var modal = document.getElementById('modal');
    var title = document.getElementById('modal-title');
    var text = document.getElementById('modal-text');
    var image = document.getElementById('modal-image');
    modal.style.display = "block";

    // Set title, text, and image based on the interest clicked
    switch (interest) {
        case 'ghc':
            title.innerHTML = "Grace Hopper Celebration";
            var paragraph1 = "In 2023, I had the incredible opportunity to attend the Grace Hopper Celebration (GHC) conference. It was a vibrant gathering where I connected with inspiring individuals and explored the latest in technology. From engaging talks by industry leaders to hands-on workshops, each moment was filled with learning and discovery.";
            var paragraph2 = "The expo hall was particularly exciting, with innovative displays showcasing cutting-edge advancements. But beyond the technology, what truly stood out were the connections I made. Meeting like-minded people and sharing experiences was incredibly rewarding. As I left GHC 2023, I felt energized and motivated, ready to make a positive impact in the tech community and beyond.";
            var fullText = "<p>" + paragraph1 + "</p><p>" + paragraph2 + "</p>";
            text.innerHTML = fullText;
            image.src= "./assests/ghc.png";
            break;
        case 'toastmasters':
            title.innerHTML = "Toastmasters International";
            var paragraph1 = "For the past three years, I've been an avid member of Vision Toastmasters, a community where I've honed my skills in public speaking and leadership. I've not only expanded my proficiency in communication but also cultivated essential qualities in leadership, management, and interpersonal relations. These experiences have been transformative, shaping not only my abilities but also my outlook on life. It's where I've discovered the power of effective communication and the art of leadership.";
            var paragraph2 = "Being elected as the Vice President Public Relations officer was a significant milestone, allowing me to further develop my networking talents and innovative thinking. Through organizing events, promoting our club's mission, and fostering connections within our community, I've learned the importance of collaboration and adaptability. Toastmasters has not only equipped me with practical skills but has also been a catalyst for self-discovery. It's a place where I've embraced challenges, celebrated successes, and forged lifelong friendships. Each meeting, each speech, and each leadership role has contributed to my journey towards becoming the best version of myself. As I continue to grow and evolve, I'm grateful for the invaluable lessons and experiences that Toastmasters has provided, shaping not only my professional trajectory but also my personal ethos and aspirations.";
            var fullText = "<p>" + paragraph1 + "</p><p>" + paragraph2 + "</p>";
            text.innerHTML = fullText;            
            image.src = "./assests/toastmasters.png";
            break;
        case 'volunteering':
            title.innerHTML = "Volunteering";
            var paragraph1 = "In my role with Rising in Unity, I actively participated in the coordination and execution of clothing distribution drives aimed at providing essential garments to orphan girls and women across Telangana, India. By leveraging the generosity of donors from the United States, we were able to make a meaningful difference in the lives of those in need, fostering a sense of dignity and empowerment within vulnerable communities.";
            var paragraph2 = "Additionally, I have volunteered my time and skills in various technical and cultural festivals during my college years. These experiences not only honed my organizational and teamwork abilities but also allowed me to contribute positively to the vibrant atmosphere of our campus community.";
            var fullText = "<p>" + paragraph1 + "</p><p>" + paragraph2 + "</p>";
            text.innerHTML = fullText;
            image.src = "./assests/volunteering.jpg";
            break;
        case 'books':
            title.innerHTML = "Favorite Books";
            var paragraph1 = "Books have always been my cherished companions, guiding me through realms of knowledge, inspiration, and introspection. Particularly drawn to non-fiction, self-help, politics, and science, each book offers a journey of discovery and enlightenment. Among my favorites is \"Palace of Illusions\" by Chitra Banerjee Divakaruni, a captivating retelling of the Mahabharata from Draupadi's perspective, exploring themes of power, love, and destiny. In \"Dreamers: How Young Indians Are Changing The World\" by Snigdha Poonam, I find a poignant reflection of contemporary Indian society. Alongside timeless classics like \"Tuesdays with Morrie\" by Mitch Albom, and insightful reads like \"Ikigai,\" \"The Power of Your Subconscious Mind\" and \"Striking Thoughts\", these books have enriched my understanding of life's complexities.";
            var paragraph2 = "Currently engrossed in \"The Molecule of More\" by Daniel Z. Lieberman and Michael E. Long, I continue to explore neuroscience and psychology, eager for new insights. With each turn of the page, I embark on a journey of intellectual curiosity and personal growth, grateful for the profound impact that literature has had on my life.";
            var fullText = "<p>" + paragraph1 + "</p><p>" + paragraph2 + "</p>";
            text.innerHTML = fullText;
            image.src = "./assests/books.png";
            break;
        case 'scholarships':
            title.innerHTML = "Scholarships";
            text.innerHTML = "I am honored to have been awarded the Academic Achievement Award scholarship for my exceptional performance during my graduation at UF. This prestigious scholarship acknowledges my dedication to academic excellence and underscores my commitment to achieving high standards in my studies. Receiving this scholarship not only validates my hard work and determination but also serves as recognition of my academic accomplishments during my time at UF.";
            image.src = "./assests/scholarship.PNG";
            break;
        default:
            title.innerHTML = "Interest";
            text.innerHTML = "Some more detailed information about this interest.";
            image.src = "";  // Default image or leave blank
    }
}

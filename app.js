// আপনার Google Business Profile Place ID (Mobile Mart, Office Road, Sonamura)
const GOOGLE_PLACE_ID = "ChIJTe97yMuHUzcRiXtJfKcgFhA";
const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

// ডাইনামিক রিভিউ বিল্ডার ডেটাবেস (এটি ৫,০০০+ ইউনিক কম্বিনেশন তৈরি করতে সক্ষম)
const reviewParts = {
    repair: {
        openings: [
            "Visited Mobile Mart on Office Road, Sonamura for my smartphone repair.",
            "Had a wonderful experience getting my phone repaired at Mobile Mart.",
            "Mobile Mart is easily the best mobile repairing shop in Sonamura.",
            "I took my damaged phone to Mobile Mart on Office Road recently.",
            "Got my smartphone serviced at Mobile Mart, Sonamura.",
            "Needed urgent mobile repairing in Sonamura and chose Mobile Mart.",
            "Very impressed with the mobile repair service at Mobile Mart.",
            "If you need reliable phone repairing in Sonamura, Mobile Mart is the place."
        ],
        details: [
            "They replaced my broken display with top-notch precision and care.",
            "The technician quickly diagnosed the charging and motherboard issue and fixed it.",
            "My phone's speaker and battery problem was solved within an hour.",
            "They fixed a complex hardware issue that other local shops couldn't solve.",
            "The screen replacement looks completely original and works smoothly.",
            "They repaired my water-damaged phone and saved all my important data.",
            "Fast diagnosis, clean soldering work, and genuine replacement components.",
            "My phone was lagging and overheating, and their servicing made it feel brand new."
        ],
        praises: [
            "The staff is very polite, honest, and explains everything clearly.",
            "Their pricing is completely transparent and very reasonable compared to others.",
            "Super fast turnaround time without compromising on repair quality.",
            "Great technical knowledge and very professional customer handling.",
            "Honest advice and zero hidden charges.",
            "Neat workmanship and prompt delivery as promised."
        ],
        closings: [
            "Highly recommended to everyone in Sonamura!",
            "Definitely my go-to shop for any mobile issue.",
            "5 stars for their trustworthy service!",
            "Will surely visit again for any future tech needs.",
            "Thank you Mobile Mart for the great support!"
        ]
    },
    unlock: {
        openings: [
            "Visited Mobile Mart on Office Road, Sonamura for a phone unlocking issue.",
            "Got my smartphone unlocked smoothly at Mobile Mart.",
            "Best place in Sonamura for mobile software solutions and device unlocking.",
            "I was locked out of my phone and visited Mobile Mart for help.",
            "Needed urgent software flashing and unlocking support in Sonamura.",
            "Highly impressed with the software and unlocking expertise at Mobile Mart."
        ],
        details: [
            "They resolved the password and FRP lock issue safely in no time.",
            "Both Android and iPhone software glitches are handled here with total perfection.",
            "My phone was stuck on the boot logo, and they fixed the software without data loss.",
            "They unlocked my device quickly using proper professional tools.",
            "Solved a tricky network and security lock problem effortlessly.",
            "Updated the firmware and removed all software bugs smoothly."
        ],
        praises: [
            "Deep technical knowledge and very fast service.",
            "Safe, secure, and completely hassle-free process.",
            "Very polite behavior and affordable service charges.",
            "They know their job inside out and deliver quick results.",
            "Genuine software support with clear communication."
        ],
        closings: [
            "Highly recommended for any mobile software or unlocking work!",
            "Best technical hub on Office Road, Sonamura.",
            "Truly deserving of a 5-star rating!",
            "Thanks a lot to the Mobile Mart team!"
        ]
    },
    cctv: {
        openings: [
            "Hired Mobile Mart, Sonamura for installing HD CCTV cameras at our premises.",
            "Got a complete CCTV security system set up by Mobile Mart.",
            "Best CCTV camera installation and repairing service in Sonamura.",
            "We contacted Mobile Mart on Office Road for our home and shop CCTV setup.",
            "Recently got HD surveillance cameras installed through Mobile Mart.",
            "Very satisfied with the CCTV installation and servicing from Mobile Mart."
        ],
        details: [
            "The camera clarity, night vision, and mobile live-view setup are crystal clear.",
            "They did super neat wiring and configured remote viewing on all our phones.",
            "They also repaired our old DVR and camera connection issues promptly.",
            "Guided us in choosing the right HD cameras covering every blind spot.",
            "Clean installation work with proper DVR setup and backup configuration.",
            "Quick troubleshooting and neat cable management throughout the building."
        ],
        praises: [
            "Very competitive pricing and dependable after-sales support.",
            "Punctual, skilled, and very professional technicians.",
            "Everything was explained clearly so anyone can operate the app easily.",
            "Genuine products with proper warranty and clean finishing.",
            "Prompt response whenever we need any technical assistance."
        ],
        closings: [
            "Highly recommended for home and business CCTV solutions in Sonamura!",
            "Best security camera service provider in the area.",
            "5 out of 5 stars for their dedication and neat work!",
            "Thank you Mobile Mart for securing our place!"
        ]
    },
    pc: {
        openings: [
            "Built my custom desktop PC through Mobile Mart, Office Road, Sonamura.",
            "Visited Mobile Mart for computer servicing and hardware upgrade.",
            "Best shop in Sonamura for custom PC building and desktop repairing.",
            "Got my old computer upgraded with an SSD and RAM at Mobile Mart.",
            "Very happy with the custom PC build and software setup from Mobile Mart.",
            "Needed reliable computer repairing in Sonamura and chose Mobile Mart."
        ],
        details: [
            "They suggested the best processor, RAM, and SSD combination within my budget.",
            "My PC runs super fast now after their SSD upgrade and clean Windows setup.",
            "Clean internal cable management and thorough thermal testing before delivery.",
            "They diagnosed a motherboard and power supply fault quickly and fixed it.",
            "Assembled a smooth, high-performance PC tailored perfectly for my daily work.",
            "Resolved overheating and slow performance issues cleanly."
        ],
        praises: [
            "Honest component recommendations without any unnecessary upselling.",
            "Very fair pricing and great technical expertise in computers.",
            "Neat assembly, genuine parts, and quick delivery.",
            "Friendly guidance and solid after-sales support.",
            "Professional service that saves both time and money."
        ],
        closings: [
            "Highly recommended for PC builds and computer repairs in Sonamura!",
            "The most trustworthy computer service center on Office Road.",
            "5 stars for performance and honest pricing!",
            "Will definitely return for future upgrades!"
        ]
    },
    parts: {
        openings: [
            "Purchased genuine mobile spare parts and accessories from Mobile Mart, Sonamura.",
            "Best shop on Office Road, Sonamura for original mobile batteries and displays.",
            "Visited Mobile Mart for mobile accessories and replacement parts.",
            "Always find authentic phone spare parts and chargers at Mobile Mart.",
            "Bought a new battery and tempered glass from Mobile Mart recently.",
            "Trusted store in Sonamura for durable mobile spare parts."
        ],
        details: [
            "Unlike cheap local copies, their displays and batteries last really long.",
            "Great stock of original chargers, cables, batteries, and protective covers.",
            "The replacement battery gives awesome backup just like a new phone.",
            "They helped me pick the exact compatible spare part for my model.",
            "High-grade spare parts with proper testing right in front of me.",
            "Good variety of accessories at very reasonable market prices."
        ],
        praises: [
            "Honest rates and guaranteed product quality.",
            "Polite staff who never push low-quality items.",
            "Reliable warranty support and transparent billing.",
            "Everything is neatly organized and reasonably priced.",
            "Trustworthy shop with genuine customer care."
        ],
        closings: [
            "Highly recommended for genuine mobile parts in Sonamura!",
            "My first choice for any mobile accessory or spare part.",
            "5 stars for quality and honesty!",
            "Great shopping experience every single time!"
        ]
    }
};

let currentCategory = "all";
let currentLength = "balanced";
let lastGeneratedText = "";
const generatedHistory = new Set();

const reviewTextArea = document.getElementById("reviewText");
const tagButtons = document.querySelectorAll(".tag-btn");
const lengthButtons = document.querySelectorAll(".length-btn");
const regenerateBtn = document.getElementById("regenerateBtn");
const postGoogleBtn = document.getElementById("postGoogleBtn");
const toast = document.getElementById("toast");

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// একটি নির্দিষ্ট ক্যাটাগরি থেকে ডাইনামিক রিভিউ তৈরি করা
function buildSingleReview(category, length) {
    const data = reviewParts[category];
    const opening = pickRandom(data.openings);
    const detail = pickRandom(data.details);
    const praise = pickRandom(data.praises);
    const closing = pickRandom(data.closings);

    if (length === "short") {
        const shortTemplates = [
            `${opening} ${closing}`,
            `${detail} ${closing}`,
            `${opening} ${praise}`
        ];
        return pickRandom(shortTemplates);
    } else if (length === "balanced") {
        const balancedTemplates = [
            `${opening} ${detail} ${closing}`,
            `${opening} ${praise} ${closing}`,
            `${opening} ${detail} ${praise}`
        ];
        return pickRandom(balancedTemplates);
    } else {
        return `${opening} ${detail} ${praise} ${closing}`;
    }
}

// র‍্যান্ডম ইউনিক রিভিউ জেনারেট করার মূল ফাংশন
function generateReview() {
    const categories = Object.keys(reviewParts);
    let candidate = "";
    let attempts = 0;

    do {
        const chosenCat = currentCategory === "all" ? pickRandom(categories) : currentCategory;
        candidate = buildSingleReview(chosenCat, currentLength);
        attempts++;
    } while ((candidate === lastGeneratedText || generatedHistory.has(candidate)) && attempts < 30);

    if (generatedHistory.size > 500) {
        generatedHistory.clear();
    }

    generatedHistory.add(candidate);
    lastGeneratedText = candidate;
    reviewTextArea.value = candidate;
}

// ক্যাটাগরি বাটন ক্লিক ইভেন্ট
tagButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tagButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-category");
        generateReview();
    });
});

// দৈর্ঘ্য (Short/Balanced/Detailed) বাটন ক্লিক ইভেন্ট
lengthButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        lengthButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentLength = btn.getAttribute("data-length");
        generateReview();
    });
});

// রিভিউ পরিবর্তন বাটন
regenerateBtn.addEventListener("click", generateReview);

// কপি এবং গুগল রিভিউ পেজে রিডাইরেক্ট (১০০% নিশ্চিত কপি মেথড)
postGoogleBtn.addEventListener("click", async () => {
    const textToCopy = reviewTextArea.value.trim();
    if (!textToCopy) return;

    let copied = false;

    // পদ্ধতি ১: আধুনিক ক্লিপবোর্ড API
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(textToCopy);
            copied = true;
        }
    } catch (err) {
        copied = false;
    }

    // পদ্ধতি ২: ফলব্যাক মেথড (TrebEdit বা পুরনো ব্রাউজারের জন্য)
    if (!copied) {
        reviewTextArea.focus();
        reviewTextArea.select();
        reviewTextArea.setSelectionRange(0, 99999);
        try {
            copied = document.execCommand("copy");
        } catch (e) {
            copied = false;
        }
    }

    // টোস্ট মেসেজ দেখানো এবং ১.২ সেকেন্ড পর গুগল পেজ ওপেন করা
    toast.style.display = "block";

    setTimeout(() => {
        window.location.href = GOOGLE_REVIEW_URL;
    }, 1200);
});

// পেজ লোড হওয়ার সাথে সাথে প্রথম রিভিউ দেখানো
window.addEventListener("DOMContentLoaded", generateReview);

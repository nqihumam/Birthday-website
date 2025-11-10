const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "2303", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Tunggu bentar ayy...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Walaaa salah password nya, hint: tanggal dan bulan jadian!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Kenapa Pacarku humam, manis banget ya?", // Example trending search query
    "Kenapa Azaria sayang banget sama aku?", // Another example query
    `Azaria Ultah (tidak akan dilupakan oleh humam)`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "Udah berapa lama kita jadian?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-03-25", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "Kita udah bersama selama:", // Title displayed on the timer page
  timerMessage: "... and tetap bersama <3", // Message shown alongside the timer
  timeUnits: {
    days: "Hari", // Label for days in the timer
    hours: "Jam", // Label for hours in the timer
    minutes: "Menit", // Label for minutes in the timer
    seconds: "Detik", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Yok kita liat kenangan kita bersama", // Title for the recap page
  clickMeText: "Click disini ayy!", // Text prompting users to interact

  recapSections: [
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Heather", // Title of the song
      artist: "Conan Gray", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Nina",
      artist: "Feast",
      left: "40%",
      top: "15%",
    },
    {
      title: "Cuek",
      artist: "Rizky Febian",
      left: "15%",
      top: "40%",
    },
    {
      title: "To the Bone",
      artist: "Pamungkasen",
      left: "30%",
      top: "75%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "September 3, 2024", description: "A beautiful day to remember." }, // Message entry
      { title: "October 5, 2024", description: "Cherishing moments together." },
      { title: "December 25, 2024", description: "Christmas with love ❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "January 1, 2024", description: "New Year's Celebration 🎉" }, // Picture entry
      { title: "February 14, 2024", description: "Valentine's Day 💕" },
      { title: "March 10, 2024", description: "Beach trip memories 🏖️" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Halo ayyy, selamat ulang tahun yaaaaa🎉🎉🎉, semoga dengan bertambah usia tambah digampangkan urusannya💖💖💖 ", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Makasih udah mau bersama ayyy, maaf belum jadi pacar yang baik, tapi tenang. Bakal aku usahain terus jadi lebih baik ayy.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "Udah berapa lama kita jadian?", // Example of a correct search query
    "udah berapa lama kita jadian?", // Another example of a correct search query
  ],
};

export default config;

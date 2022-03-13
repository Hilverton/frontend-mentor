const projects = [
  {
    alt: "Advice generator app image",
    title: "Advice generator app",
    description:
      "Your challenge is to build out this advice generator app using the Advice Slip API and get it looking as close to the design as possible.",
    path: "advice-generator-app-main",
    level: "JUNIOR",
    repo: "https://github.com/Hilverton/frontend-mentor/tree/main/advice-generator-app-main",
  },
  {
    alt: "Single price grid component image",
    title: "Single price grid component",
    description:
      "Your challenge is to build out this pricing component and get it looking as close to the design as possible.",
    path: "single-price-grid-component-master",
    level: "NEWBIE",
    repo: "https://github.com/Hilverton/frontend-mentor/tree/main/single-price-grid-component-master",
  },
  {
    alt: "Huddle landing page image",
    title: "Huddle landing page",
    description:
      "Your challenge is to build out this landing page from the designs provided in the starter code.",
    path: "huddle-landing-page-master",
    level: "NEWBIE",
    repo: "https://github.com/Hilverton/frontend-mentor/tree/main/huddle-landing-page-master",
  },
];

const list = document.getElementById("list");

projects.forEach((project) => {
  const item = document.createElement("article");

  item.className = "lg:w-1/3 sm:w-1/2 p-4";
  item.innerHTML = `
    <div class="flex relative">
      <img
        alt="${project.alt}"
        class="absolute inset-0 w-full h-full object-cover object-center"
        src="./${project.path}/design/desktop-preview.jpg"
      />
      <div
        class="px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
      >
        <h2
          class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
        >
          ${project.level}
        </h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
          ${project.title}
        </h1>
        <p class="leading-relaxed">
          Your challenge is to build out this advice generator app using the Advice Slip API and get it looking as close to the design as possible.
        </p>
        <div class="flex items-center flex-wrap pt-2">
          <a
            href="./${project.path}/index.html"
            target="__blank"
            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
          >
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </a>
          <a
            href="${project.repo}"
            target="__blank"
            class="text-gray-400 inline-flex items-center leading-none text-sm"
          >
            <svg
              class="w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                fill="rgba(156,163,175,1)"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;

  list.appendChild(item);
});

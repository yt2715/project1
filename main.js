/* jshint esversion:6 */
const TAG_ACTIVE_CLASS = "tag--active";
const SEARCH_HIDDEN_CLASS = "search__hidden";
const CLOSE_TAG_CLASS = "close-tag";
const TAG_CLASS = "tag";

const jobsListings = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "https://png.pngtree.com/png-vector/20191201/ourmid/pngtree-semi-closed-lens-icon-circle-png-image_2060821.jpg",
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1D ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"]
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1412620377/fiso4net4pmgozdn4zez.jpg",
    "position": "Web Developer",
    "role": "Fullstack",
    "level": "Senior",
    "postedAt": "10D ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["JavaScript"],
    "tools": ["Flask" , "Ruby"]
  },
  {
    "id": 3,
    "company": "MyHome",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFfGiLZIbUnHXNxMQ_Grvq08GULy2yEgXJw&usqp=CAU",
    "position": "Backend Developer",
    "role": "Backend",
    "level": "Intern",
    "postedAt": "5M ago",
    "contract": "Contract",
    "location": "UK Only",
    "languages": ["JavaScript"],
    "tools": ["Node.js" , "Vue"]
  },
  {
    "id": 4,
    "company": "Doodle",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUpJ-QXfB8lXw3CXHat5a3s7SmYCB65wbZw&usqp=CAU",
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "15D ago",
    "contract": "Full Time",
    "location": "Remote",
    "languages": ["C#"],
    "tools": ["Mongoose"]
  },
  {
    "id": 5,
    "company": "Account",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3S--EhGp6wVExalxWWskFIhvQRJY5_uShsQ&usqp=CAU",
    "position": "Junior Fullstack Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "7M ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["Java"],
    "tools": ["React", "MongoDB"]
},
  {
    "id": 6,
    "company": "Loop Studios",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmMI4u9VsNX89M5fu-FQXcHG6Pk2CGgWHWg&usqp=CAU",
    "position": "Software Engineer",
    "role": "Developer",
    "level": "Senior",
    "postedAt": "2W ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["Java" , "Python"],
    "tools": ["Spring"]
  },
  {
    "id": 7,
    "company": "Air Filter Company",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhhyiWA2aNKGdKa7e0xE-6DpjKWUJNDwA0w&usqp=CAU",
    "position": "Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1M ago",
    "contract": "Contract",
    "location": "UK only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 8,
    "company": "FaceIt",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfGfu7mVUH349rb364O-ooZRUln_JEFZvmXA&usqp=CAU",
    "position": "Cloud Computing",
    "role": "Intern",
    "level": "Midweight",
    "postedAt": "5W ago",
    "contract": "Full Time",
    "location": "India Only",
    "languages": ["Java" , "C++"],
  },
  {
    "id": 9,
    "company": "Shortly",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlx-V2ADk36rDR2WHmLwoBf_okCp6Kx9xN1A&usqp=CAU",
    "position": "Mobile App Development",
    "role": "iOS Developer",
    "level": "Senior",
    "postedAt": "8W ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["Swift", "JavaScript"],
    "tools": ["Angular"]
},
  {
    "id": 10,
    "company": "Red Hat",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxsVvjvOGaNSA3ucDt5diUXgea7drdO2PsA&usqp=CAU",
    "position": "Web Development",
    "role": "Trainee",
    "level": "Junior",
    "postedAt": "10D ago",
    "contract": "Full Time",
    "location": "India Only",
    "languages": ["PHP" , "GOlang"]
  },
  {
    "id": 11,
    "company": "Insure",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bHUdbb-zYdPp77CPvAk4fRN6qCXVdYejnQ&usqp=CAU",
    "position": "Data Analysis",
    "role": "Trainee",
    "level": "Junior",
    "postedAt": "1W ago",
    "contract": "Contract",
    "location": "Remote",
    "languages": ["R"],
    "tools": ["Django", "Spring"]
  },
  {
    "id": 12,
    "company": "Eyecam Company",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9W4BCOtHK53EgrSmDeiC-mYQPacbEA-tDvQ&usqp=CAU",
    "position": "Data Manager",
    "role": "Backend",
    "level": "Midweight",
    "postedAt": "3M ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["Java"],
    "tools": ["SQL"]
}
];

function getTagHTML(tag, tagClasses) {
    return `<span class="${tagClasses}">
               ${tag}
           </span>`;
}

function getJobListingHTML(jobData, filterTags = []) {
    const JOB_TAGS_PLACEHOLDER = '###JOB_TAGS###';
    let jobListingHTML = `
        <div class="job">
            <div class="jobs__rows jobs__all">
                <img src="${jobData.logo}" alt="${jobData.company}" class="jobs__img" />
                <div class="jobs__info">
                    <span class="company">${jobData.company}</span>
                    <span class="title">${jobData.position}</span>

                    <ul class="jobs__details">
                        <li class="details-item">${jobData.postedAt}</li>
                        <li class="details-item">${jobData.contract}</li>
                        <li class="details-item">${jobData.location}</li>
                    </ul>
                </div>
            </div>
            <div class="jobs__rows jobs__tags">
                ${JOB_TAGS_PLACEHOLDER}
            </div>
        </div>
    `;

    const tagsList = [
        jobData.role,
        jobData.level,
        ...(jobData.languages || []),
        ...(jobData.tools || [])
    ];
    const tagsListLowercase = tagsList.map(t => t && t.toLowerCase());
    const passesFilter = !filterTags.length || filterTags.every(tag => (
        tagsListLowercase.includes(tag && tag.toLowerCase())
    ));

    if (!passesFilter) {
        return '';
    }

    const tagsString = tagsList.reduce((acc, currentTag) => {
        const activeClass = (filterTags.includes(currentTag) && TAG_ACTIVE_CLASS) || '';

        return acc + getTagHTML(currentTag, `${TAG_CLASS} ${activeClass}`);
    }, '');

    return jobListingHTML.replace(JOB_TAGS_PLACEHOLDER, tagsString);
}

function toggleClass(el, className) {
    if (el.classList.contains(className)) {
        el.classList.remove(className);
        return;
    }
    el.classList.add(className);
}

function getSearchBarTags(tagValue, searchContentEl) {
    let searchBarTags = Array.from(searchContentEl.children)
        .map(node => node.innerHTML && node.innerHTML.trim())
        .filter(tag => !!tag);

    if (searchBarTags.includes(tagValue)) {
        searchBarTags = searchBarTags.filter(tag => tag !== tagValue);
    } else {
        searchBarTags = [...searchBarTags, tagValue];
    }
    return searchBarTags;
}

function setJobsListings(filterTags) {
    const jobsListingsHTML = jobsListings.reduce((acc, currentListing) => {
        return acc + getJobListingHTML(currentListing, filterTags);
    }, '');

    document.getElementById("job").innerHTML = jobsListingsHTML;
}

function displaySearchWrapper(display = false) {
    const searchWrapper = document.getElementById("search");

    if (display) {
        searchWrapper.classList.remove(SEARCH_HIDDEN_CLASS);
        return;
    }

    searchWrapper.classList.add(SEARCH_HIDDEN_CLASS);
}

function setSearchbarContent(searchContentEl, tags) {
    searchContentEl.innerHTML = tags.reduce((acc, currentTag) => {
        return acc + getTagHTML(currentTag, CLOSE_TAG_CLASS);
    }, '');
}

function resetState(searchContentEl) {
    searchContentEl.innerHTML = '';

    setJobsListings();
    displaySearchWrapper(false);
    toggleClass(targetEl, TAG_ACTIVE_CLASS);
}

window.addEventListener("click", (event) => {
    const targetEl = event.target;
    const targetText = targetEl.innerHTML.trim();
    const searchContentEl = document.getElementById("search-content");
    const searchBarTags = getSearchBarTags(targetText, searchContentEl);

    if (targetEl.id === "clear" || !searchBarTags.length) {
        resetState(searchContentEl);
        return;
    }

    if (![TAG_CLASS, CLOSE_TAG_CLASS].some(c => targetEl.classList.contains(c))) {
        return;
    }

    setSearchbarContent(searchContentEl, searchBarTags);
    toggleClass(targetEl, TAG_ACTIVE_CLASS);
    displaySearchWrapper(searchBarTags.length > 0);
    setJobsListings(searchBarTags);
});

setJobsListings();

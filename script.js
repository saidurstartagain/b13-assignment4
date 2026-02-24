// Empty array for interview and rejected list 
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';


// get element by ID of Header part  
const totalJob = document.getElementById("total-job");
const totalJob2 = document.getElementById("total-job-2");



const totalInterview = document.getElementById("interview-job");
const totalRejected = document.getElementById("rejected-job");
// console.log(totalInterview)
// console.log(totalRejected)
const allCards = document.getElementById("all-cards");

// console.log(totalJob, totalInterview, totalRejected)

// ok

function totalCount() {
    totalJob.innerText = allCards.children.length;
    totalJob2.innerText = allCards.children.length;
    totalInterview.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;
    // console.log(interviewList.length)
    // console.log(rejectedList.length)

    // console.log(typeof (totalJobAll1))
}


totalCount()

//  get element by of main part's header section 

let allTab = document.getElementById("btn-all-toggle");
let interviewTab = document.getElementById("btn-interview-toggle");
let rejectedTab = document.getElementById("btn-rejected-toggle");

// 

let filteredSection = document.getElementById('filtered-section');
let emptySection = document.getElementById('empty-section');

// console.log(allTab, interviewTab)

//  delete functions
let sectionDelete = document.getElementById('sectionDelete')

sectionDelete.addEventListener('click', function () {
    let eSection = document.getElementById('eSection');
    eSection.classList.add('hidden')
    console.log(eSection)
    alert('Successfully deleted')


})


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

//  Function for toggoling 
function toggleStyle(id) {

    allTab.classList.remove('bg-blue-600')
    allTab.classList.remove('text-white')
    allTab.classList.add('text-black')
    allTab.classList.add('bg-white', 'text-black')

    interviewTab.classList.remove('bg-blue-600');
    interviewTab.classList.remove('text-white')
    interviewTab.classList.add('text-black')
    interviewTab.classList.add('bg-white', 'text-black');

    rejectedTab.classList.remove('bg-blue-600');
    rejectedTab.classList.remove('text-white')
    rejectedTab.classList.add('text-black')
    rejectedTab.classList.add('bg-white', 'text-black');

    let selected = document.getElementById(id);
    selected.classList.remove('bg-white')
    selected.classList.add('bg-blue-600')
    selected.classList.remove('text-black')
    selected.classList.add('text-white')


    if (id == 'btn-interview-toggle') {

        emptySection.classList.add('hidden')
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview()
        if (interviewList.length == 0) {
            emptySection.classList.remove('hidden')
            // console.log(emptySection)
        }

    }
    else if (id == 'btn-all-toggle') {
        emptySection.classList.add('hidden')
        allCards.classList.remove('hidden')
        filteredSection.classList.add('hidden')
        // emptySection.classList.add('hidden')
        // console.log(emptySection)


    }
    else if (id == 'btn-rejected-toggle') {
        emptySection.classList.add('hidden')



        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejection()
        if (rejectedList.length == 0) {
            emptySection.classList.remove('hidden')
            // console.log(emptySection)
        }
    }
    currentStatus = id
    console.log(id)

}


// get main container 
const mainContainer = document.querySelector("main");
mainContainer.addEventListener('click', function (event) {
    // console.log(event.target);
    if (event.target.classList.contains('btn-interview')) {
        // console.log(event.target.classList.contains('btn-interview'))
        const parentNode = event.target.parentNode.parentNode;
        const mobileFast = parentNode.querySelector('.mobileFast').innerText;
        const remoteFull = parentNode.querySelector('.remoteFull').innerText;
        const reactNative = parentNode.querySelector('.reactNative').innerText;
        const build = parentNode.querySelector('.build').innerText;
        const status = parentNode.querySelector('.status-btn').innerText;
        parentNode.querySelector('.status-btn').innerText = "interview";
        const cardInfo = {
            mobileFast,
            remoteFull,
            reactNative,
            build,
            status: 'interview'

        }
        // console.log(cardInfo)
        // console.log(interviewList)
        const jobExist = interviewList.find(item => item.mobileFast == cardInfo.mobileFast)
        // console.log(jobExist)

        if (!jobExist) {
            interviewList.push(cardInfo);
            // console.log("from exit")
        }
        rejectedList = rejectedList.filter(item => item.mobileFast != cardInfo.mobileFast)
        totalCount()
        // console.log(interviewList)
        // console.log(rejectedList)

        if (currentStatus == "btn-rejected-toggle") {
            renderRejection()
        }
        // console.log(currentStatus)
    }
    else if (event.target.classList.contains('btn-rejected')) {
        // console.log('hello from rejected job')
        const parentNode = event.target.parentNode.parentNode;
        const mobileFast = parentNode.querySelector('.mobileFast').innerText;
        const remoteFull = parentNode.querySelector('.remoteFull').innerText;
        const reactNative = parentNode.querySelector('.reactNative').innerText;
        const build = parentNode.querySelector('.build').innerText;
        const status = parentNode.querySelector('.status-btn').innerText;
        parentNode.querySelector('.status-btn').innerText = "Rejected";
        const cardInfo = {
            mobileFast,
            remoteFull,
            reactNative,
            build,
            status: 'Rejected'

        }
        // console.log(cardInfo)rejectedList
        const jobExist = rejectedList.find(item => item.mobileFast == cardInfo.mobileFast)
        // console.log(jobExist)
        if (!jobExist) {
            rejectedList.push(cardInfo);
            // console.log("from exit")
        }
        console.log(rejectedList)
        interviewList = interviewList.filter(item => item.mobileFast != cardInfo.mobileFast)
        // totalCount()
        totalCount()
        if (currentStatus == "btn-interview-toggle") {
            renderInterview()
        }

    }
})

// Filter section rending and document get ..

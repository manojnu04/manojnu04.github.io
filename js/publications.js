// 🗃️ List of Publications
const publications = [
  {
    title: "<span class='special-font'>&nbsp;&nbsp;&nbsp;Event-triggered control for exponential synchronization of reaction–diffusion fractional-order Clifford-valued delayed neural networks and its application to image encryption",
    link: "https://doi.org/10.1016/j.neucom.2025.130604",
    journal: "<span class='special-font1'>Neurocomputing (IF: 6.5), Vol. 648, pp. 130604, Year: 2025"
  },{
    title: "<span class='special-font'>&nbsp;&nbsp;&nbsp;Decomposition method-based global Mittag-Leffler synchronization for fractional-order Clifford-valued neural networks with transmission delays and impulses",
    link: "https://doi.org/10.1016/j.neunet.2025.107564",
    journal: "<span class='special-font1'>Neural Networks (IF: 6.0), Vol. 189, pp. 107564, Year: 2025"
  },{
    title: "<span class='special-font'>&nbsp;&nbsp;&nbsp;Design and analysis of quaternion-valued neural networks for storing and retrieving color images",
    link: "https://doi.org/10.1007/s12190-025-02485-1",
    journal: "<span class='special-font1'>Journal of Applied Mathematics and Computing (IF: 2.7), Vol. -, pp. -, Year: 2025"
  },{
    title: "<span class='special-font'>&nbsp;&nbsp;&nbsp;Global Mittag-Leffler stability and synchronization of fractional-order Clifford-valued delayed neural networks with reaction-diffusion terms and its application to image encryption",
    link: "https://doi.org/10.1016/j.ins.2024.121773",
    journal: "<span class='special-font1'>Information Sciences (IF: 6.8), Vol. 698, pp. 121773, Year: 2025"
  }
];

let index = 0;
const itemsPerRow = 3;

// Create a single publication block
function createPublicationBlock(pub) {
  return `
    <div class="col-md-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-offset="50">
      <div class="media">
        <div class="media-heading-wrapper">
          <div class="media-object pull-left">
            <i class="fa fa-pencil-square-o"></i>
          </div>
          <h3 class="media-heading">
            <a rel="nofollow" href="${pub.link}" target="_blank">${pub.title}</a>
          </h3>
          <div class="media-body">
            <p>${pub.journal}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Append publications to the container
function loadMorePublications() {
  const container = document.getElementById("publication-container");
  for (let i = 0; i < itemsPerRow && index < publications.length; i++, index++) {
    container.insertAdjacentHTML("beforeend", createPublicationBlock(publications[index]));
  }
  if (index >= publications.length) {
    document.getElementById("see-more-btn").style.display = "none";
  }
}

// Initialize after page load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("see-more-btn").addEventListener("click", loadMorePublications);
  loadMorePublications(); // load initial publications
});

// 🗃️ List of Publications
const publications = [
  {
    title: "<span class='special-font'>&nbsp;&nbsp;&nbsp;Further results on global stability of Clifford-valued neural networks subject to time-varying delays",
    link: "https://doi.org/10.1016/j.neucom.2025.130886",
    authors: "<span class='special-font1'>Authors: <b> Manoj Nagappan</b>, Sriraman Ramalingam, Gurusamy R., Yilun Shang",
    journal: "<span class='special-font1'>Journal Name: Neurocomputing (IF: 6.5)",
    details: "<span class='special-font1'>Volume: 651, Pages: 130886, Year: 2025"
  },{
    title: "<span class='special-font'>&nbsp;&nbsp;&nbsp;Event-triggered control for exponential synchronization of reaction–diffusion fractional-order Clifford-valued delayed neural networks and its application to image encryption",
    link: "https://doi.org/10.1016/j.neucom.2025.130604",
    authors: "<span class='special-font1'>Authors: Sriraman Ramalingam, <b> Manoj Nagappan</b>, Agarwal Praveen, Vigo-Aguiar Jesús, Jain Shilpi",
    journal: "<span class='special-font1'>Journal Name: Neurocomputing (IF: 6.5)",
    details: "<span class='special-font1'>Volume: 648, Pages: 130604, Year: 2025"
  },{
    title: "<span class='special-font'>&nbsp;&nbsp;&nbsp;Decomposition method-based global Mittag-Leffler synchronization for fractional-order Clifford-valued neural networks with transmission delays and impulses",
    link: "https://doi.org/10.1016/j.neunet.2025.107564",
    authors: "<span class='special-font1'>Authors: Sriraman Ramalingam, <b> Manoj Nagappan </b>, Pratap Anbalagan",
    journal: "<span class='special-font1'>Journal Name: Neural Networks (IF: 6.0)",
    details: "<span class='special-font1'>Volume: 189, Pages: 107564, Year: 2025"
  },{
    title: "<span class='special-font'>&nbsp;&nbsp;&nbsp;Design and analysis of quaternion-valued neural networks for storing and retrieving color images",
    link: "https://doi.org/10.1007/s12190-025-02485-1",
    authors: "<span class='special-font1'>Authors: <b> Manoj Nagappan</b>, Sriraman Ramalingam, Gurusamy R., Yilun Shang ",
    journal: "<span class='special-font1'>Journal Name: Journal of Applied Mathematics and Computing (IF: 2.7)",
    details: "<span class='special-font1'>Volume: -, Pages: -, Year: 2025"
  },{
    title: "<span class='special-font'>&nbsp;&nbsp;&nbsp;Global Mittag-Leffler stability and synchronization of fractional-order Clifford-valued delayed neural networks with reaction-diffusion terms and its application to image encryption",
    link: "https://doi.org/10.1016/j.ins.2024.121773",
    authors: "<span class='special-font1'>Authors: <b> Manoj Nagappan</b>, Sriraman Ramalingam",
    journal: "<span class='special-font1'>Journal Name: Information Sciences (IF: 6.8)",
    details: "<span class='special-font1'>Volume: 698, Pages: 121773, Year: 2025"
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
            <p>${pub.authors}</p>
            <p>${pub.journal}</p>
            <p>${pub.details}</p>
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

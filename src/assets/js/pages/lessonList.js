$("[data-link=materi]").addClass("active");

const checkSubject = () => {
  switch (sessionStorage.videoCategory) {
    case "1":
      // Get English
      $.post(
        env.server + "/videos",
        {
          api_token: user.api_token,
          category: "1",
        },
        function (data) {
          console.log(data);
          var engListVideo = "";
          data.forEach((video) => {
            engListVideo += `
                  <div class="col-12 col-md-6 col-lg-4">
                    <article class="article article-style-c">
                      <div class="article-header">
                        <img
                          class="article-image"
                          src="https://img.youtube.com/vi/${video.url}/0.jpg"
                        />
                      </div>
                      <div class="article-details">
                        <div class="article-category">
                          <a href="#">Bahasa Inggris</a>
                          <div class="bullet"></div>
                          <a href="#">${
                            video.minscore == userdata.eng_score
                              ? "Belum Tuntas"
                              : "Tuntas"
                          }</a>
                        </div>
                        <div class="article-title">
                          <h2>
                            <a href="./materi.html?url=${video.url}">
                              ${video.title}</a
                            >
                          </h2>
                        </div>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                    </article>
                  </div>`;
          });
          $("#categoryTitle").text("Bahasa Inggris");
          $("#listVideo").html(engListVideo);
        }
      );

      break;
    case "2":
      // Get Arabic
      $.post(
        env.server + "/videos",
        {
          api_token: user.api_token,
          category: "2",
        },
        function (data) {
          console.log(data);
          var arabListVideo = "";
          data.forEach((video) => {
            arabListVideo += `
                  <div class="col-12 col-md-6 col-lg-4">
                    <article class="article article-style-c">
                      <div class="article-header">
                        <img
                          class="article-image"
                          src="https://img.youtube.com/vi/${video.url}/0.jpg"
                        />
                      </div>
                      <div class="article-details">
                        <div class="article-category">
                          <a href="#">Bahasa Arab</a>
                          <div class="bullet"></div>
                          // <a href="#">Level 1</a>
                        </div>
                        <div class="article-title">
                          <h2>
                            <a href="./materi.html?url=${video.url}">
                              ${video.title}</a
                            >
                          </h2>
                        </div>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                    </article>
                  </div>`;
          });
          $("#categoryTitle").text("Bahasa Arab");
          $("#listVideo").html(arabListVideo);
        }
      );

      break;

    default:
      sessionStorage.setItem("videoCategory", 1);
      checkSubject();
      break;
  }
};
// End check Subject

$("#subject").on("change", () => {
  sessionStorage.setItem("videoCategory", $("#subject").val());
  checkSubject();
});

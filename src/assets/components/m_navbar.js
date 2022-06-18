var m_navList = `
            <a href="javascript:void(0)" onclick="popNotif(1)" class="dropdown-item dropdown-item-unread">
              <div class="dropdown-item-icon bg-primary text-white">
                <i class="fas fa-code"></i>
              </div>
              <div class="dropdown-item-desc">
                Update aplikasi ke versi terbaru
                <div class="time text-primary">2 Min Ago</div>
              </div>
            </a>
            <a href="javascript:void(0)" onclick="popNotif(2)" class="dropdown-item">
              <div class="dropdown-item-icon bg-danger text-white">
                <i class="fas fa-exclamation-triangle"></i>
              </div>
              <div class="dropdown-item-desc">
                Server akan down dalam waktu 5 menit
                <div class="time">17 Hours Ago</div>
              </div>
            </a>
            <a href="javascript:void(0)" onclick="popNotif(3)" class="dropdown-item">
              <div class="dropdown-item-icon bg-info text-white">
                <i class="fas fa-bell"></i>
              </div>
              <div class="dropdown-item-desc">
                Welcome to Stisla template!
                <div class="time">Yesterday</div>
              </div>
            </a>`;
var m_navNotif = [];
$("#m_navbar").html(`
  <div class="navbar-bg"></div>
  <nav class="navbar navbar-expand-lg main-navbar">
    <div class="mr-auto">
      <a
        data-toggle="sidebar"
        class="cursor-pointer text-white nav-link nav-link-lg"
      >
        <i class="fas fa-bars"></i>
      </a>
    </div>
    <ul class="navbar-nav navbar-right">
      
      <li class="dropdown">
        <a
          href="#"
          data-toggle="dropdown"
          class="nav-link dropdown-toggle nav-link-lg nav-link-user"
        >
          <img
            alt="image"
            src="https://res.cloudinary.com/syselang/image/upload/v1655426720/brand_icon/Square89x89Logo_oftkmt.png"
            class="rounded-circle mr-1"
          />
          <div class="d-sm-none d-lg-inline-block">
            Hi, <span class="user_short_name"></span>
          </div></a
        >
        <div class="dropdown-menu dropdown-menu-right">
          <div class="dropdown-title">Logged in 5 min ago</div>
          <a href="#" class="dropdown-item has-icon">
            <i class="far fa-user"></i> Coming Soon
          </a>
          <a
            href="#"
            class="dropdown-item has-icon"
          >
            <i class="fas fa-bolt"></i> Coming Soon
          </a>
          <a href="#" class="dropdown-item has-icon">
            <i class="fas fa-cog"></i> Coming Soon
          </a>
          <div class="dropdown-divider"></div>
          <a href="javascript:void(0)" onclick="popNotif()" class="dropdown-item has-icon">
            <i class="fas fa-question"></i> Tentang
          </a>
          <a
            id="logoutTrigger"
            class="cursor-pointer dropdown-item has-icon text-danger"
          >
            <i class="fas fa-sign-out-alt"></i> Logout
          </a>
        </div>
      </li>
    </ul>
  </nav>
`);

function popNotif() {
  Swal.fire({
    iconHtml:
      '<img src="https://res.cloudinary.com/syselang/image/upload/v1655426720/brand_icon/Square89x89Logo_oftkmt.png">',
    html: `<p class='text-center'><h5>Elang</h5>${env.version}<br>Made with 💙 by Elang Team</p>`,
  });
}

/* <li class="dropdown dropdown-list-toggle">
  <a
    href="#"
    data-toggle="dropdown"
    class="nav-link notification-toggle nav-link-lg beep"
  >
    <i class="far fa-bell"></i>
  </a>
  <div class="dropdown-menu dropdown-list dropdown-menu-right">
    <div class="dropdown-header">Notifikasi</div>
    <div class="dropdown-list-content dropdown-list-icons">${m_navList}</div>
    <div class="dropdown-footer text-center">
      <a href="#">
        View All <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  </div>
</li>; */

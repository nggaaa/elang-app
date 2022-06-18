var m_brand = "Elang";
var m_sidebar = `<div class="sidebar-brand">
              <a
                onclick="window.location.href = window.location"
                class="cursor-pointer"
                >${m_brand}</a
              >
            </div>
            <div class="sidebar-brand sidebar-brand-sm">
              <a
                onclick="window.location.href = window.location"
                class="cursor-pointer"
                >${m_brand.charAt(0)}</a
              >
            </div>`;
const m_sidebarlink = [
  {
    title: "Home",
    url: "./index.html",
    icon: "fas fa-home",
  },
  {
    title: "Materi",
    url: "./lessonList.html",
    icon: "fas fa-book",
  },
  {
    title: "Rank",
    url: "./rank.html",
    icon: "fas fa-trophy",
  },
];

m_sidebar += '<ul class="sidebar-menu"><li class="menu-header">Dashboard</li>';
m_sidebarlink.forEach((link) => {
  m_sidebar += `<li data-link="${link.title.toLowerCase()}"><a class="nav-link" href="${
    link.url
  }"><i class="${link.icon}"></i> <span>${link.title}</span></a></li>`;
});

m_sidebar += "</ul>";
$("#sidebar-wrapper").html(m_sidebar);
